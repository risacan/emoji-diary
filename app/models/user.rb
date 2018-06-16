class User < ApplicationRecord
  acts_as_authentic do |c|
    c.validate_email_field = false
  end

  has_many :auth_accounts

  validates :name,
    presence: true,
    format: {with: /\A\w+\z/},
    length: {in: 5..50},
    uniqueness: true

  # https://github.com/binarylogic/authlogic/blob/v4.1.1/lib/authlogic/acts_as_authentic/email.rb
  validates :email,
    format: {
      with: Authlogic::Regex::EMAIL,
      message: proc {
        I18n.t("error_messages.email_invalid", default: "should look like an email address.")
      },
    },
    length: {maximum: 100},
    uniqueness: {case_sensitive: false},
    allow_nil: true

  # @param [AuthAccount] account
  def self.create_with_account!(account)
    create! do |user|
      user.name = account.info["nickname"].gsub(/\W+/, "")
      user.email = account.info["email"]
    end
  end
end

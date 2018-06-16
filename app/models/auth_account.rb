class AuthAccount < ApplicationRecord
  serialize :info, JSON

  belongs_to :user

  # validates :provider, presence: true
  # validates :uid, presence: true, uniqueness: {scope: :provider}
  # validates :token, presence: false
  # validates :secret, presence: true
  # validates :info, presence: true

  scope :by, -> (provider) { where(provider: provider) }
  scope :by_uid, -> (provider, uid) { by(provider).where(uid: uid) }

  def self.authenticate(auth)
    account = by_uid(auth.provider, auth.uid).first_or_initialize

    account.attributes = {
      token: auth&.credentials.token,
      secret: auth&.credentials.secret,
      info: auth&.info,
    }

    if auth.credentials.expired_at
      account.expires_at = Time.zone.at(auth.credentials.expires_at)
    end

    account
  end
end

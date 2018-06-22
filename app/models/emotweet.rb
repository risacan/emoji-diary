class Emotweet < ApplicationRecord
  validates :emoji, presence: true
  validate :one_emoji

  def one_emoji
    unless emoji.scan(/\X/).count == 1
      errors.add(:emoji, ": 絵文字は１つしか登録できません")
    end
  end
end

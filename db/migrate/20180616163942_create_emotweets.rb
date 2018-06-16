class CreateEmotweets < ActiveRecord::Migration[5.2]
  def change
    create_table :emotweets do |t|
      t.string :emoji
      t.text :tweet
      t.bigint :tweeted_by

      t.timestamps
    end
  end
end

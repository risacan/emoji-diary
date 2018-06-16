class CreateAuthAccounts < ActiveRecord::Migration[5.2]
  def change
    create_table :auth_accounts do |t|
      t.bigint :user_id
      t.string :provider
      t.string :uid
      t.string :token
      t.string :secret
      t.datetime :expires_at
      t.text :info

      t.timestamps
    end
  end
end

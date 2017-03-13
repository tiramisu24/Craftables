class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :username, null:false
      t.string :image_url
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.timestamps
    end
  end
end

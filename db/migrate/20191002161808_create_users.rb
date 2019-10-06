class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :email, null: false, uniqueness: true
      t.text :description, null: false
      t.string :hosting_status
      t.timestamps
    end
  end
end

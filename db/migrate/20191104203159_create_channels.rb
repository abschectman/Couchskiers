class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.integer :reservation_id, null: false
      t.timestamps
    end
  end
end

class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.text :reservation_message
      t.integer :host_id, null: false
      t.integer :reserver_id, null: false
      t.timestamps
    end
    add_index(:reservations, :host_id)
    add_index(:reservations, :reserver_id)
  end
end

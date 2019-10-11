class AddBooked < ActiveRecord::Migration[5.2]
  def change
    add_column :reservations, :booked, :boolean
  end
end

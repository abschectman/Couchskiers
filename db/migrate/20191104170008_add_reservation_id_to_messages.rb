class AddReservationIdToMessages < ActiveRecord::Migration[5.2]
  def change
    add_column :messages, :reservation_id, :integer
  end
end

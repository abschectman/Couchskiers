class AddReferenceIdToMessages < ActiveRecord::Migration[5.2]
  def change
    add_column :messages, :reference_id, :integer
  end
end

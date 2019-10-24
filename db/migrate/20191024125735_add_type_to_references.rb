class AddTypeToReferences < ActiveRecord::Migration[5.2]
  def change
    add_column :references, :ref_type, :string
  end
end

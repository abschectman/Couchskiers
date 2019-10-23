class CreateReferences < ActiveRecord::Migration[5.2]
  def change
    create_table :references do |t|
      t.integer :referer_id,null: false
      t.integer :subject_id, null: false
      t.text :body
      t.boolean :positive
      t.timestamps
    end
    add_index(:references, :referer_id)
    add_index(:references, :subject_id)
  end
end

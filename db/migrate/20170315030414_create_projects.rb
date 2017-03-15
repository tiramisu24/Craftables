class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.integer :author_id, null: false
      t.boolean :archived, null: false
      t.boolean :featured, null: false
      t.timestamps
    end

    add_index :projects, :author_id
  end
end

class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.integer :author_id
      t.integer :project_id, null: false
      t.string :description, null: false, default: "Anonymous"
      t.timestamps
    end
    add_index :comments, :project_id
  end

end

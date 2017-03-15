class CreateSteps < ActiveRecord::Migration[5.0]
  def change
    create_table :steps do |t|
      t.integer :stepNum, null: false
      t.string :title, null: false
      t.text :body, null: false
      t.integer :project_id, null: false
      t.timestamps
    end
    add_index :steps, :project_id
  end
end

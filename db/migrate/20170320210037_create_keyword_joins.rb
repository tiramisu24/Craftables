class CreateKeywordJoins < ActiveRecord::Migration[5.0]
  def change
    create_table :keyword_joins do |t|
      t.integer :keyword_id, null: false
      t.integer :project_id, null: false
      t.timestamps
    end

    add_index :keyword_joins, :keyword_id
    add_index :keyword_joins, :project_id

  end
end

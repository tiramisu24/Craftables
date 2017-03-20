class CreateKeywords < ActiveRecord::Migration[5.0]
  def change
    create_table :keywords do |t|
      t.string :keyword, null:false
      t.timestamps
    end

    add_index :keywords, :keyword, unique: true

  end
end

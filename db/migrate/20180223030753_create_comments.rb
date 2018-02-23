class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.integer :author_id, null: false
      t.integer :workout_id, null: false
      t.timestamps
    end

    add_index :comments, :author_id
    add_index :comments, :workout_id

  end
end

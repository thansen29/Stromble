class CreateRoutes < ActiveRecord::Migration[5.1]
  def change
    create_table :routes do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.float :start_lat, null: false
      t.float :start_lng, null: false
      t.float :end_lat, null: false
      t.float :end_lng, null: false
      t.float :distance, null: false
      t.string :distance_unit, null: false, default: "miles"
      t.string :elevation_gain, null: false
      t.string :elevation_unit, null: false, default: "feet"
      t.boolean :private, null: false, default: false
      t.timestamps
    end
    add_index :routes, :user_id
  end
end

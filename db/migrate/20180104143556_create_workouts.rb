class CreateWorkouts < ActiveRecord::Migration[5.1]
  def change
    create_table :workouts do |t|
      t.integer :user_id, null: false
      t.float :distance
      t.string :distance_unit, null: false, default: 'miles'
      t.float :duration_hr, null: false, default: 1
      t.integer :duration_min, null: false, default: 0
      t.integer :duration_s, null: false, default: 0
      t.float :elevation
      t.string :elevation_unit, null: false, default: 'feet'
      t.string :sport, null: false, default: 'Run'
      t.datetime :date, null: false
      t.datetime :time, null: false
      t.string :title, null: false
      t.string :type
      t.text :description
      t.boolean :private, null: false, default: false
      t.timestamps
    end
    add_index :workouts, :user_id
  end
end

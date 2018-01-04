class UpdateWorkouts < ActiveRecord::Migration[5.1]
  def change
    remove_column :workouts, :duration_hr
    add_column :workouts, :duration_hr, :integer, default: 1, null: false
  end
end

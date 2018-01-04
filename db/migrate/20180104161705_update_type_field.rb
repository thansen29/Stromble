class UpdateTypeField < ActiveRecord::Migration[5.1]
  def change
    remove_column :workouts, :type
    add_column :workouts, :activity_type, :string
  end
end

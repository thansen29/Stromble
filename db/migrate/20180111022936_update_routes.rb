class UpdateRoutes < ActiveRecord::Migration[5.1]
  def change
    add_column :routes, :duration, :string
    add_column :routes, :description, :text
  end
end

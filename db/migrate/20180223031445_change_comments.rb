class ChangeComments < ActiveRecord::Migration[5.1]
  def change
    add_column :comments, :body, :text, null: false
  end
end

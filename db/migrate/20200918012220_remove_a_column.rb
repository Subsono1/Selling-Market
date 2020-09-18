class RemoveAColumn < ActiveRecord::Migration[6.0]
  def change
    remove_column :orders, :user_name
  end
end

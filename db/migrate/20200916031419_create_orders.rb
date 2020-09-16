class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.references :user, null: false, foreign_key: true
      t.string :user_name
      t.references :product, null: false, foreign_key: true
      t.string :address

      t.timestamps
    end
  end
end

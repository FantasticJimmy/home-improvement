class AdminUser < ActiveRecord::Migration[5.0]
  def change
    # Create a migration with the required fields
    create_table :admins do |t|
      t.string :email
      t.string :encrypted_password
      t.timestamps null: false
    end
  end
end

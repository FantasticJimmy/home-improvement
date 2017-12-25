class AdminUser < ActiveRecord::Migration[5.0]
  def change
    # Create a migration with the required fields
    create_table :admins do |t|
      t.references :user
    end
  end
end

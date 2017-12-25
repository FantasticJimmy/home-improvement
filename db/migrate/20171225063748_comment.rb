class Comment < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.text :content
      t.belongs_to :commentable, polymorphic: true
      t.references :user

      t.timestamps null: false
    end
    add_index :comments ,[:commentable_id,:commentable_type]
  end
end

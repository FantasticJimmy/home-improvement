class ProjectTable < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.string  :name
      t.text    :description
      t.string  :type, null: false, default: 'private'
      t.integer :est_effort
      t.integer :act_effort
      t.string  :status, null:false, default: 'created'
    end
  end
end
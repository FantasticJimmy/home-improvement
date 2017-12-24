class ProjectTable < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.string     :name
      t.references :user, index: true, foreign_key: true
      t.text       :description
      t.string     :privacy, null: false, default: 'private'
      t.float    :est_effort
      t.float    :act_effort
      t.string     :status, null:false, default: 'created'

      t.timestamps
    end
  end
end
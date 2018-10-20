class CreateUploads < ActiveRecord::Migration[5.2]
  def change
    create_table :uploads do |t|
      t.string :path
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end

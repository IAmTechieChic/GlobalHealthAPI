class CreateDistricts < ActiveRecord::Migration
  def change
    create_table :districts do |t|
      t.integer :source_id
      t.string :country
      t.string :region
      t.string :district
      t.string :shapefile
      t.float :latitude
      t.float :longitude

      t.timestamps
    end
  end
end

class AddIdsToDistricts < ActiveRecord::Migration
  def change
    add_column :districts, :country_id, :integer
    add_column :districts, :region_id, :integer
    add_column :districts, :district_id, :integer
  end
end

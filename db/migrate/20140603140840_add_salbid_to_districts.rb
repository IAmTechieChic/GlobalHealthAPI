class AddSalbidToDistricts < ActiveRecord::Migration
  def change
    add_column :districts, :salbid, :string
  end
end

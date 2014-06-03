class AddGadmidToDistricts < ActiveRecord::Migration
  def change
    add_column :districts, :gadmid, :string
  end
end

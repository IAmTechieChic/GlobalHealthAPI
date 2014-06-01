class AddDisplayToDistricts < ActiveRecord::Migration
  def change
    add_column :districts, :Display_n, :string
  end
end

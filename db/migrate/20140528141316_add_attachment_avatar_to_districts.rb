class AddAttachmentAvatarToDistricts < ActiveRecord::Migration
  def self.up
    change_table :districts do |t|
      t.attachment :avatar
    end
  end

  def self.down
    drop_attached_file :districts, :avatar
  end
end

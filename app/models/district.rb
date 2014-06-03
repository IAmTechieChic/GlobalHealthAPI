class District < ActiveRecord::Base

	has_attached_file :avatar, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "/images/:style/missing.png"
  	validates_attachment_content_type :avatar, :content_type => /\Aimage\/.*\Z/

  	


	def self.parse_response(response)
		response.each do |data|
			first_or_create_DistrictRecord(
							data['admin0id'],
							data['admin0'],
							data['admin1d'],
							data['admin1'],
							data['admin2id'],
							data['admin2'])
			end
	end


	def self.get_districts

	end

	def self.get_countries
	
	end

	def self.get_regions
	end

	private

	def self.first_or_create_DistrictRecord(countryid, country, regionid, region, districtid, district)
		District.where(
				:country_id => countryid,
				:country => country,
				:region_id => regionid,
				:region => region,
				:district_id => districtid,
				:district => district).first_or_create
	end

end

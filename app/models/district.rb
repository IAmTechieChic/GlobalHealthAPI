class District < ActiveRecord::Base

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

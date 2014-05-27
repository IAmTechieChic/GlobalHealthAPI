class Api
	def self.http_response
		api_get = HTTParty.get("https://gtmp.linkssystem.org/api/districts?admin0=ghana&admin1=ashanti")
		return api_get
	end

	def self.get_all_data(response)

	end
end
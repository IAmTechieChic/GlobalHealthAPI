class Api

	def self.http_response
		api_get = HTTParty.get("https://gtmp.linkssystem.org/api/districts")
		return api_get
	end


end
class ApiController < ApplicationController	
	def index
		@response = Api.http_response
		
		#parse and save districts
		@district = District.parse_response(@response.parsed_response)

	end
end
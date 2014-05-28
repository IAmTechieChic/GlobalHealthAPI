class ApiController < ApplicationController	
	def index
		@response = Api.http_response
		
		#parse and save districts
		District.parse_response(@response.parsed_response)

		@districts = District.all
	end
end
class ApiController < ApplicationController	
	def index
		@response = Api.http_response
		#@district = District.all

		#save district
		@district = District.parse_response(@response.parsed_response)

	end
end
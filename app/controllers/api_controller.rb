class ApiController < ApplicationController
	
	def index
		@response = Api.http_response

		render json: @response
	end
end
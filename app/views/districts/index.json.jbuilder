json.array!(@districts) do |district|
  json.extract! district, :id, :source_id, :country, :region, :district, :shapefile, :latitude, :longitude
  json.url district_url(district, format: :json)
end

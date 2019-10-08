
json.set! @location.id do
json.extract! @location, :city, :country, :id
json.hosts do
  json.array! @location.hosts, :id
  end
end
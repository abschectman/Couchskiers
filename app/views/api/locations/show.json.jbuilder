json.locations do
json.set! @location.id do
json.extract! @location, :city, :country, :id
json.hosts do
  json.array! @location.hosts, :id
  end
end
end

json.users do
  @location.hosts.each do |host|
    json.set! host.id do
      json.extract! host, :id, :email, :description, :hosting_status
    end
  end
end

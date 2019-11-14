json.locations do
json.set! @location.id do
json.extract! @location, :city, :country, :id
json.hosts do
  json.array! @location.hosts, :id
  end
  json.requests do
  json.array! @location.reservers, :id
  end
end
end

json.users do
  @location.hosts.each do |host|
    json.set! host.id do
      json.extract! host, :id, :email, :description, :hosting_status
    # if host.photo.attached?
    #     json.set! json.photo  do 
    #       image_tag(host.photo)
    #       end
    #   end
    end
  end
end

json.requesters do
  @location.reservers.each do |req|
    json.set! req.id do
      json.extract! req, :id, :email, :description, :hosting_status
    # if req.photo.attached?
    #   json.set! json.photo do 
    #     image_tag(req.photo)
    #     end
    #   end
    end
  end
end

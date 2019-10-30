json.users do 
  @users.each do |user|
  json.set! user.id do
  json.extract! user, :email, :hosting_status, :location_id, :description
    if user.photo.attached?
    json.photo image_tag(user.photo)
    end
    end
  end
end
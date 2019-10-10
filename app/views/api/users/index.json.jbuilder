json.users do 
  @users.each do |user|
  json.set! user.id do
  json.extract! user, :email, :hosting_status, :location_id, :description
    end
  end
end
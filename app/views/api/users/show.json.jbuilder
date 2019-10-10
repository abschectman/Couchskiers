json.partial! 'user', user: @user

json.location do
    json.set! @user.location.id do
      json.extract! @user.location, :id, :city, :country
    end
  end
json.partial! 'user', user: @user

json.location do
    json.set! @user.location.id do
      json.extract! @user.location, :id, :city, :country
    end
  end

    if @user.photo.attached?
    json.photo image_tag(@user.photo)
    end

  json.references do
    json.array! @user.reference_ids
    end

    json.reference_list do
      @user.references.each do |ref|
        json.set! ref.id do
          json.extract! ref, :id, :body, :referer_id, :subject_id, :positive
        end
      end
  end

json.referers do 
    @user.referers.each do |ref|
        json.set! ref.id do
          json.extract! ref, :email, :hosting_status, :location_id, :description, :id
        end
      end
  end
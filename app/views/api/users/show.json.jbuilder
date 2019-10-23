json.partial! 'user', user: @user

json.location do
    json.set! @user.location.id do
      json.extract! @user.location, :id, :city, :country
    end
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
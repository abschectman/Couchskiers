json.res do
  json.set! @reservation.id do
    json.extract! @reservation, :id, :start_date, :end_date, :host_id, :reserver_id
      json.messages do
        json.array! @reservation.message_ids
    end
  end
end

json.messages do
  @reservation.messages.each do |message|
    json.set! message.id do
      json.extract! message, :id, :body, :reservation_id, :user_id
    end
  end
end

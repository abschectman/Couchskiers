class Message < ApplicationRecord

  belongs_to :reservation,
  foregin_key: :reservation_id,
  class_name: :Reservation


end

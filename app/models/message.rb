class Message < ApplicationRecord

  belongs_to :reservation,
  foreign_key: :reservation_id,
  class_name: :Reservation

    belongs_to :channel,
  foreign_key: :channel_id,
  class_name: :Channel


end

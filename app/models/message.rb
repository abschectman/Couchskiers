class Message < ApplicationRecord

  belongs_to :reservation,
  foreign_key: :reservation_id,
  class_name: :Reservation

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

end

class Channel < ApplicationRecord
validates :id, uniqueness: {scope: :reservation_id}
  
belongs_to :reservation,
  foreign_key: :reservation_id,
  class_name: :Reservation

  has_many :messages,
  foreign_key: :channel_id,
  class_name: :Message

end
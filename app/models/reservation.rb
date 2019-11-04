class Reservation < ApplicationRecord
  validates :host_id, :reserver_id, :start_date, :end_date, presence: true
  validates :reserver_id, uniqueness: {scope: :host_id}

  belongs_to :host,
    foreign_key: :host_id,
    class_name: :User

   belongs_to :reserver,
    foreign_key: :reserver_id,
    class_name: :User

    has_one :channel,
    foreign_key: :channel_id,
    class_name: :Channel

  has_many :messages,
    foreign_key: :reservation_id,
    class_name: :Message
end
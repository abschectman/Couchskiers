class Reservation < ApplicationRecord
  validates :host_id, :reserver_id, :start_date, :end_date, presence: true

  belongs_to :host,
  foreign_key: :host_id,
  class_name: :User

   belongs_to :reserver,
  foreign_key: :reserver_id,
  class_name: :User

  
end
class Location < ApplicationRecord
  validates :city, :country, presence: true
  


  has_many :residents,
  foreign_key: :location_id,
  class_name: :User

  has_many :hosting_requests,
  through: :residents,
  source: :host_requests

  has_many :reservers,
  through: :hosting_requests,
  source: :reserver

  has_many :references,
  foreign_key: :subject_id,
  class_name: :Reference,
  dependent: :destroy


  def hosts
    @residents = self.residents
   return @residents.select{|user| user.hosting_status != "Not Accepting Guests"}
  end
end

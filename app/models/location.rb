class Location < ApplicationRecord
  validates :city, :country, presence: true
  


  has_many :residents,
  foreign_key: :location_id,
  class_name: :User


  def hosts
    @residents = self.residents
   return @residents.select{|user| user.hosting_status != "Not Accepting Guests"}
  end
end

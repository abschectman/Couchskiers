class Reference < ApplicationRecord
 
validates :subject_id, uniqueness: {scope: :referer_id}

belongs_to :writer,
foreign_key: :referer_id,
class_name: :User


  
end
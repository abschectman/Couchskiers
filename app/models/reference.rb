class Reference < ApplicationRecord
 
validates :subject_id, uniqueness: {scope: :referer_id}

belongs_to :writer,
foreign_key: :referer_id,
class_name: :User

belongs_to :subject,
foreign_key: :subject_id,
class_name: :User
  
end
class Reference < ApplicationRecord
 
belongs_to :writer,
foreign_key: :referer_id,
class_name: :User


  
end
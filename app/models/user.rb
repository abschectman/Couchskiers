class User < ApplicationRecord
  validates :password_digest, :session_token, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true 
  attr_reader :password
  after_initialize :ensure_session_token


  belongs_to :location,
  foreign_key: :location_id,
  class_name: :Location

  has_one_attached :photo
  
  has_many :host_requests,
  foreign_key: :host_id,
  class_name: :Reservation,
  dependent: :destroy

  has_many :references,
  foreign_key: :subject_id,
  class_name: :Reference,
  dependent: :destroy

  has_many :referers,
  through: :references,
  source: :writer

  has_many :referers_locations,
  through: :referers,
  source: :location

  has_many :reservations,
  foreign_key: :reserver_id,
  class_name: :Reservation

  has_many :pending_reservations,
  foreign_key: :host_id,
  class_name: :Reservation

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

   def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64 
  end


end
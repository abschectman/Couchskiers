class User < ApplicationRecord
  validates :password_digest, :session_token, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true 
  attr_reader :password
  after_initialize :ensure_session_token


  belongs_to :location,
  foreign_key: :location_id,
  class_name: :Location

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
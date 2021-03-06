class User < ApplicationRecord
  attr_reader :password

	validates :username, :password_digest, :session_token, presence: true
	validates :username, uniqueness: true
	validates :password, length: {minimum: 6}, allow_nil: :true

	after_initialize :ensure_session_token
	# before_validation :ensure_session_token_uniqueness

  has_many :projects,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Project

  has_many :comments,
    foreign_key: :author_id,
    class_name: :Comment


	def password= (password)
    @password = password
		self.password_digest = BCrypt::Password.create(password)
	end

	def self.find_by_credentials (username, password)
		user = User.find_by(username: username)
		return nil unless user
		user.password_is?(password) ? user : nil
	end

	def password_is? (password)
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def reset_token
		self.session_token = SecureRandom.base64
		self.save!
		self.session_token
	end

	private

	def ensure_session_token
		self.session_token ||= SecureRandom.base64
	end

	def ensure_session_token_uniqueness
		while User.find_by(session_token: self.session_token)
			self.session_token = reset_token
		end
	end

end

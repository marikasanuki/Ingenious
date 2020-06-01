# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord

    attr_reader :password_digest
    after_initialize :ensure_session_token
    
    validates :username, :password_digest, :session_token, presence: true
    validates :username, uniqueness: true
    validates :password, length: { minimum: 4 }, allow_nil: true

    # associations go here


    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user && user.is_password?(password)
        return user
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        bcrypt_password = BCrypt::Password.new(self.password_digest)
        bcrypt_password.is_password?(password)
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end 

    def reset_session_token!
        self.update!(session_token: self.class.generate_session_token)
        self.session_token
    end

end

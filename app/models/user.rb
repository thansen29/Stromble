# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  fname           :string
#  lname           :string
#  birthday        :date
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 5, allow_nil: true }

  has_attached_file :avatar, default_url: "default.jpg"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

  has_many :workouts
  has_many :routes
  has_many :likes

  has_many :followers,
    class_name: :Follow,
    foreign_key: :followed_id,
    dependent: :destroy

  has_many :following,
    class_name: :Follow,
    foreign_key: :follower_id,
    dependent: :destroy

  attr_reader :password
  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end

  def generate_session_token
    SecureRandom.urlsafe_base64
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def follows?(other_user)
    # id = self.id
    # other = other_user.id
    # Follow.where('follower_id = ? AND followed_id = ?', id, other)
    following.include?(other_user)
  end

  def follow(other_user)
    follow = Follow.new
    follow.follower_id = self.id
    follow.followed_id = other_user.id
    follow.save!
    # following << other_user
  end

  def unfollow(other_user)
    id = self.id
    other = other_user.id
    Follow.where('follower_id = ? AND followed_id = ?', id, other).destroy_all
    # following.delete(other_user)
  end


  private
  def ensure_session_token
    self.session_token ||= generate_session_token
  end

end

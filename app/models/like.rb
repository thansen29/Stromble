class Like < ApplicationRecord
  validates :user, uniqueness: { scope: :workout }
  belongs to :workout
  belongs to :user

end

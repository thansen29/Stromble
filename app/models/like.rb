class Like < ApplicationRecord
  validates :user, uniqueness: { scope: :workout }
  belongs_to :workout
  belongs_to :user

end

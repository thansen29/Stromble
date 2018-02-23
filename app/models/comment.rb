class Comment < ApplicationRecord
  validates :author, :workout, :body, presence: true

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id,
    dependent: :destroy

  belongs_to :workout, dependent: :destroy


end

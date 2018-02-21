# == Schema Information
#
# Table name: workouts
#
#  id             :integer          not null, primary key
#  user_id        :integer          not null
#  distance       :float
#  distance_unit  :string           default("miles"), not null
#  duration_min   :integer          default(0), not null
#  duration_s     :integer          default(0), not null
#  elevation      :float
#  elevation_unit :string           default("feet"), not null
#  sport          :string           default("Run"), not null
#  date           :datetime         not null
#  time           :datetime         not null
#  title          :string           not null
#  description    :text
#  private        :boolean          default(FALSE), not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  duration_hr    :integer          default(1), not null
#  activity_type  :string
#

class Workout < ApplicationRecord
  validates :user, :distance_unit, :duration_hr, :duration_min, :duration_s,
  :elevation_unit, :sport, :date, :time, :title, presence: true;

  validates :private, inclusion: { in: [true, false] }


  belongs_to :user
  has_many :likes, dependent: :destroy

  has_many :likers, through: :likes, source: :user

  def like(other_user)
    likers << other_user
  end

  def unlike(other_user)
    likers.delete(other_user)
  end
end

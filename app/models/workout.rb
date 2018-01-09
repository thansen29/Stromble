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
end

# dispatch(updateWorkout({
#   id: 3,
#   user_id: 15,
#   distance: 1.5,
#   elevation: 1.0,
#   date: 'Sun, 31 Dec 2017',
#   time: '22:51:05',
#   title: 'Test Run',
#   activity_type: "Marathon",
#   description: 'Running is super duper hard',
#   private: true
#   }))

# dispatch(createWorkout({
#   user_id: 15,
#   distance: 1.5,
#   elevation: 1.0,
#   date: 'Sun, 31 Dec 2017',
#   time: '22:51:05',
#   title: 'Test Run',
#   activity_type: "Marathon",
#   description: 'Running is hard',
#   private: false
#   }))
  # time: '22:51:05 UTC +00:00',

  #
  # distance_unit: 'miles',
  # duration_hr: 1,
  # duration_min: 0,
  # duration_s: 0,

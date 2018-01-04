# == Schema Information
#
# Table name: workouts
#
#  id             :integer          not null, primary key
#  user_id        :integer          not null
#  distance       :float
#  distance_unit  :string           default("miles"), not null
#  duration_hr    :float            default(1.0), not null
#  duration_min   :integer          default(0), not null
#  duration_s     :integer          default(0), not null
#  elevation      :float
#  elevation_unit :string           default("feet"), not null
#  sport          :string           default("Run"), not null
#  date           :datetime         not null
#  time           :datetime         not null
#  title          :string           not null
#  type           :string
#  description    :text
#  private        :boolean          default(FALSE), not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Workout < ApplicationRecord
end

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

require 'test_helper'

class WorkoutTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

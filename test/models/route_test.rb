# == Schema Information
#
# Table name: routes
#
#  id             :integer          not null, primary key
#  user_id        :integer          not null
#  title          :string           not null
#  start_lat      :float            not null
#  start_lng      :float            not null
#  end_lat        :float            not null
#  end_lng        :float            not null
#  distance       :float            not null
#  distance_unit  :string           default("miles"), not null
#  elevation_gain :string           not null
#  elevation_unit :string           default("feet"), not null
#  private        :boolean          default(FALSE), not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

require 'test_helper'

class RouteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

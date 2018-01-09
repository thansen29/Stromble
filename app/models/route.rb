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

class Route < ApplicationRecord
  validates :user, :title, :start_lat, :start_lng, :end_lat, :end_lng,
  :distance, :distance_unit, :elevation_gain, :elevation_unit, presence: true

  validates :private, inclusion: { in: [true, false] }

  belongs_to :user

end

# dispatch(createRoute({
#   user_id: 15,
#   title: 'First route!!',
#   start_lat: 91.12,
#   start_lng: 91.12221,
#   end_lat: 91.121112,
#   end_lat: 91.12333221,
#   distance: 1.6,
#   distance_unit: "miles",
#   elevation_gain: 20,
#   elevation_unit: 'feet',
#   private: true
#   }))

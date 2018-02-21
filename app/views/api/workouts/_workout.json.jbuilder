json.extract! workout, :id, :user_id, :sport, :title, :distance,
  :distance_unit, :duration_hr, :duration_min, :duration_s, :activity_type, :date,
  :time, :description, :elevation, :elevation_unit, :private

json.fname user.fname
json.lname user.lname
json.avatar_url asset_path(user.avatar.url)
# json.likers workout.likers
json.liker_ids workout.liker_ids
json.likers do
  workout.likers.each do |liker|
    json.fname liker.fname
    json.lname liker.lname
    json.avatarUrl asset_path(liker.avatar.url)
  end
end
#
# json.liker_ids do
#   workout.likers.each do |liker|
#     json.id liker.id
#   end
# end

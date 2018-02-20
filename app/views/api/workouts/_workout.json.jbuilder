json.extract! workout, :id, :user_id, :sport, :title, :distance,
  :distance_unit, :duration_hr, :duration_min, :duration_s, :activity_type, :date,
  :time, :description, :elevation, :elevation_unit, :private

json.fname user.fname
json.lname user.lname
json.avatar_url asset_path(user.avatar.url)

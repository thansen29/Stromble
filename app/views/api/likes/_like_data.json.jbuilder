json.liker do
  json.id liker.id
  json.fname liker.fname
  json.lname liker.lname
  json.avatarUrl asset_path(liker.avatar.url)
end

json.likerId liker.id
json.workoutId workout.id

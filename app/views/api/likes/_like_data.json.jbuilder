json.likers do
  workout.likers.each do |liker|
    json.fname liker.fname
    json.lname liker.lname
    json.avatarUrl asset_path(liker.avatar.url)
  end
end

json.likerId liker.id
json.workoutId workout.id

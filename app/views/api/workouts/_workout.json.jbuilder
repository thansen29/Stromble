json.extract! workout, :id, :user_id, :sport, :title, :distance,
  :distance_unit, :duration_hr, :duration_min, :duration_s, :activity_type, :date,
  :time, :description, :elevation, :elevation_unit, :private

json.fname user.fname
json.lname user.lname
json.avatar_url asset_path(user.avatar.url)
json.liker_ids workout.liker_ids
json.likers do
  workout.likers.each do |liker|
    json.set! liker.id do
      json.id liker.id
      json.fname liker.fname
      json.lname liker.lname
      json.avatarUrl asset_path(liker.avatar.url)
    end
  end
end

json.comments do
  workout.comments.each do |comment|
    json.set! comment.id do
      json.id comment.id
      json.userId comment.author_id
      json.workoutId comment.workout_id
      json.body comment.body
    end
  end
end
# json.comments workout.comments.each do |comment|
#   json.set! comment.id do
#     json.id comment.id
#     json.userId comment.author_id
#     json.workoutId comment.workout_id
#     json.body comment.body
#   end
# end

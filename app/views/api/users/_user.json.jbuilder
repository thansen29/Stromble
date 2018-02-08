json.id user.id
json.fname user.fname
json.lname user.lname
json.avatar_url asset_path(user.avatar.url)
json.followers user.followers.select(:follower_id).as_json(:except => :id)
json.following user.following.select(:followed_id).as_json(:except => :id)

json.id user.id
json.fname user.fname
json.lname user.lname
json.avatar_url asset_path(user.avatar.url)
# user.following.select(:followed_id).as_json(:except => :id) will give key value in hash
json.followers user.followers.pluck(:follower_id) #this returns an array of all the follow items, just want follower_id
json.following user.following.pluck(:followed_id) #this returns an array of all the follow items, just want followed_id

# json.followers user.followers #this returns an array of all the follow items, just want follower_id
# json.following user.following #this returns an array of all the follow items, just want followed_id

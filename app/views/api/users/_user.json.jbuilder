# json.extract! user, :id, :fname, :lname, asset_path(:avatar.url)
json.id user.id
json.fname user.fname
json.lname user.lname
json.avatar_url asset_path(user.avatar.url)
# json.followers follower_id
# json.following followed_id

json.followers user.followers #this returns an array of all the follow items, just want follower_id
json.following user.following #this returns an array of all the follow items, just want followed_id

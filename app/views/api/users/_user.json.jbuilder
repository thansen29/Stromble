# json.extract! user, :id, :fname, :lname, asset_path(:avatar.url)
json.id user.id
json.fname user.fname
json.lname user.lname
json.avatar_url asset_path(user.avatar.url)
#might need to fix

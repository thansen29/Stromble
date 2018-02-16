json.id user.id
json.fname user.fname
json.lname user.lname
json.avatar_url asset_path(user.avatar.url)
json.follower_ids user.follower_ids
json.following_ids user.following_ids
# json.followers user.followers.map { |follow| { avatarUrl: asset_path(follow.follower.avatar.url), fname: follow.follower.fname, lname: follow.follower.lname, id: follow.follower.id, followers: follow.follower.followers, following: follow.follower.following } }
# json.following user.following.map { |follow| { avatarUrl: asset_path(follow.followed.avatar.url), fname: follow.followed.fname, lname: follow.followed.lname, id: follow.followed.id, followers: follow.followed.followers, following: follow.followed.following } }

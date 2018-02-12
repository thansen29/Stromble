json.id user.id
json.fname user.fname
json.lname user.lname
json.avatar_url asset_path(user.avatar.url)
# json.followers user.followers.map {|follow| follow.follower }
# json.following user.following.map {|follow| follow.followed }
json.followers user.followers.map { |follow| { avatarUrl: asset_path(follow.follower.avatar.url), fname: follow.follower.fname, lname: follow.follower.lname, id: follow.follower.id, followers: follow.follower.followers, following: follow.follower.following } }
json.following user.following.map { |follow| { avatarUrl: asset_path(follow.followed.avatar.url), fname: follow.followed.fname, lname: follow.followed.lname, id: follow.followed.id, followers: follow.followed.followers, following: follow.followed.following } }

# json.followers user.followers.select(:follower_id).as_json(:except => :id)
# json.following user.following.select(:followed_id).as_json(:except => :id)

# json.followers user.followers.map do |follow|
#   json.set! follow.follower do |f|
#     id: f.id
#     fname: f.fname
#     lname: f.lname
#     avatar_url: asset_path(f.avatar_url)
#   end
# end
# json.following user.following.map do |follow|
#   json.set! follow.followed do |f|
#     id: f.id
#     fname: f.fname
#     lname: f.lname
#     avatar_url: asset_path(f.avatar_url)
#   end
# end
# json.following user.following.map {|follow| follow.followed }

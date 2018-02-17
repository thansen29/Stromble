json.users do
  users.each do |user|
    json.set! user.id do
      json.id user.id
      json.fname user.fname
      json.lname user.lname
      json.avatarUrl asset_path(user.avatar.url)
      json.follower_ids user.follower_ids
      json.following_ids user.following_ids
      # json.followers user.followers.select(:follower_id).as_json(:except => :id)
      # json.following user.following.select(:followed_id).as_json(:except => :id)
    end
  end
end

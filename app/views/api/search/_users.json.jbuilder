json.users do
  users.each do |user|
    json.set! user.id do
      json.id user.id
      json.fname user.fname
      json.lname user.lname
      json.avatarUrl asset_path(user.avatar.url)
      json.followers user.followers.select(:follower_id).as_json(:except => :id)
    end
  end
end

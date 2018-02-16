users.each do |user|
  json.set! user.follower.id do
    json.partial! 'user', user: user.follower
  end
end

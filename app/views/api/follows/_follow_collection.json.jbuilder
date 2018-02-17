users.each do |user|
  json.set! user.follower.id do
    json.partial! 'user', user: user.follower
  end
  json.set! user.followed.id do
    json.partial! 'user', user: user.followed
  end
end

json.partial! 'api/users/user', user: @user, as: :user
# json.partial! 'api/users/user', user: @other_user, as: :other_user
# json.array! @user do |user|
#   json.id user.id
#   json.fname user.fname
#   json.lname user.lname
#   json.avatar_url asset_path(user.avatar.url)
#   json.followers user.followers
#   json.following user.following
# end
#
# json.array! @other_user do |other_user|
#   json.id other_user.id
#   json.fname other_user.fname
#   json.lname other_user.lname
#   json.avatar_url asset_path(other_user.avatar.url)
#   json.followers other_user.followers
#   json.following other_user.following
# end

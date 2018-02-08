class Api::FollowsController < ApplicationController

  def toggleFollow
    @other_user = User.find(params[:id])
    @user = current_user
    if @user.follows?(@other_user).length > 0
      @user.unfollow(@other_user)
      render 'api/users/follows', {user: @user, other: @other_user}
    else
      @user.follow(@other_user)
      render 'api/users/follows', {user: @user, other: @other_user}
    end
  end
end

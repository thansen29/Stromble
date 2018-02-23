require 'timeliness'

class Api::WorkoutsController < ApplicationController

  def index
    if params[:location] == '/workouts'
      @workouts = Workout.all
        .where(user_id: current_user.id)
        .page(params[:page].to_i).per(20)
    elsif params[:location] == 'feed'
      ids = current_user.following_ids.map {|id| Follow.where(id: id).pluck(:followed_id) }
      ids = ids.map {|el| el.first unless el.first == params[:id].to_i }

      @workouts = Workout.all
        .where('user_id IN (?)', ids)
        .where.not('private = ?', true)
        .page(params[:page].to_i).per(4)
    else
      if current_user.id != params[:id]
        @workouts = Workout.all
          .where(user_id: params[:id])
          .where.not('private = ?', true)
          .page(params[:page].to_i).per(4)
      else
        @workouts = Workout.all
          .where(user_id: params[:id])
          .page(params[:page].to_i).per(4)
      end
    end
  end

  def show
    @workout = Workout.find(params[:id])
  end

  def create
    date = workout_params[:date]
    time = workout_params[:time]
    together = "#{date} #{time}"
    parsedDate = Timeliness.parse(together, :datetime, :zone => :current)
    @workout = Workout.new(workout_params)
    @workout[:date] = parsedDate
    @workout[:time] = parsedDate
    if @workout.save
      render :show
    else
      render json: { workout: "You must fill out the required fields "}, status: 422
    end
  end

  def update
    @workout = current_user.workouts.find(params[:id])
    if @workout.update(workout_params)
      render :show
    else
      render json: { title: "Activity title cannot be left blank"}, status: 422
    end
  end

  def destroy
    workout = Workout.find(params[:id])
    workout.destroy!
    render json: {}
  end

  def like
    workout = Workout.find(params[:id])
    current_user.like(workout)
    render partial: 'api/likes/like_data',
           locals: { liker: current_user, workout: workout }
  end

  def comment
    workout = Workout.find(params[:id])
    body = params[:body]
    current_user.comment(workout, body)
    commentId = Comment.last.id
    createdAt = Comment.last.created_at
    render partial: 'api/comments/comment_data',
           locals: {
             user: current_user,
             workoutId: workout.id,
             body: body,
             commentId: commentId,
             createdAt: createdAt
           }
  end

  def uncomment
    workout_id = params[:id]
    commentId = Comment.where('author_id = ? AND workout_id = ?', current_user.id, workout_id)
    current_user.uncomment(workout_id)
    render partial: 'api/comments/comment_data',
           locals: {
             commentId: commentId
           }
  end

  private
  def workout_params
    params.require(:workout).permit(:user_id, :distance, :distance_unit,
    :duration_hr, :duration_min, :duration_s, :elevation, :elevation_unit,
    :sport, :date, :time, :title, :activity_type, :description, :private )
  end

end

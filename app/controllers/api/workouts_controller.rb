require 'timeliness'

class Api::WorkoutsController < ApplicationController

  def index
    if params[:location] == '/workouts'
      @workouts = Workout.all
        .where(user_id: current_user.id)
        .page(params[:page].to_i).per(20)
    else
      @workouts = Workout.all
        .where(user_id: params[:id])
        .page(params[:page].to_i).per(4)
    end
  end

  def show
    @workout = Workout.find(params[:id])
  end

  def create
    # date = Timeliness.parse(workout_params[:date], :date)
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

  private
  def workout_params
    params.require(:workout).permit(:user_id, :distance, :distance_unit,
    :duration_hr, :duration_min, :duration_s, :elevation, :elevation_unit,
    :sport, :date, :time, :title, :activity_type, :description, :private )
  end

end

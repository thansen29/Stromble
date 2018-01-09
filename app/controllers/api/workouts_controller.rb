class Api::WorkoutsController < ApplicationController

  def index
    @workouts = Workout.all.where(user_id: current_user.id)
  end

  def show
    @workout = Workout.find(params[:id])
  end

  def create
    @workout = Workout.new(workout_params)
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

  def total_run_distance
    total = Workout.where(sport: "Run", user: current_user).sum(:distance)
    render json: { runDistance: total }
  end

  def total_ride_distance
    total = Workout.where(sport: "Ride", user: current_user).sum(:distance)
    render json: { rideDistance: total }
  end

  def longest_run_distance
    distance = Workout.where(user: current_user, sport: "Run").maximum(:distance)
    render json: { longestRunDistance: distance }
  end

  def longest_ride_distance
    distance = Workout.where(user: current_user, sport: "Ride").maximum(:distance)
    render json: { longestRideDistance: distance }
  end

  def longest_duration
    duration = Workout.where(user: current_user).maximum(:duration_hr)
    render json: { longestDuration: duration }
  end

  def total_runs
    total = Workout.where(sport: "Run", user: current_user).count(:sport)
    render json: { totalRuns: total }
  end

  def total_rides
    total = Workout.where(sport: "Ride", user: current_user).count(:sport)
    render json: { totalRides: total }
  end

  def fasted_speed
    # total = Workout.where(sport: "Ride", user: current_user).sum(:distance)
    # render json: { fastedSpeed: total }
  end


  private
  def workout_params
    params.require(:workout).permit(:user_id, :distance, :distance_unit,
    :duration_hr, :duration_min, :duration_s, :elevation, :elevation_unit,
    :sport, :date, :time, :title, :activity_type, :description, :private )
  end

  def calculateSpeed
    return (distance / ((parseFloat(duration_hr)) + ((parseFloat(duration_min)) / 60)))
  end

end

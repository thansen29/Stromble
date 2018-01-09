class Api::StatisticsController < ApplicationController

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

  def longest_run_duration
    duration = Workout.where(user: current_user, sport: "Run").maximum(:duration_hr)
    render json: { longestRunDuration: duration }
  end

  def longest_ride_duration
    duration = Workout.where(user: current_user, sport: 'Ride').maximum(:duration_hr)
    render json: { longestRideDuration: duration }
  end

  def total_runs
    total = Workout.where(sport: "Run", user: current_user).count(:sport)
    render json: { totalRuns: total }
  end

  def total_rides
    total = Workout.where(sport: "Ride", user: current_user).count(:sport)
    render json: { totalRides: total }
  end
end

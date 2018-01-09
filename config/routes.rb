Rails.application.routes.draw do
  root to: 'static_pages#root'
  # TODO: Make sure that nested is right
  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resource :session, only: [:create, :destroy]
    resources :workouts, except: :new
    get 'total_run_distance', to: 'statistics#total_run_distance'
    get 'total_ride_distance', to: 'statistics#total_ride_distance'
    get 'longest_run_distance', to: 'statistics#longest_run_distance'
    get 'longest_ride_distance', to: 'statistics#longest_ride_distance'
    get 'longest_run_duration', to: 'statistics#longest_run_duration'
    get 'longest_ride_duration', to: 'statistics#longest_ride_duration'
    get 'total_runs', to: 'statistics#total_runs'
    get 'total_rides', to: 'statistics#total_rides'
    get 'fasted_speed', to: 'statistics#fasted_speed'

    # resources :workouts do
    #   get :total_run_distance, on: :member
    #   get :total_ride_distance, on: :member
    #   get :longest_distance, on: :member
    #   get :longest_duration, on: :member
    #   get :total_runs, on: :member
    #   get :total_rides, on: :member
    #   get :fasted_speed, on: :member
    # end
  end
end

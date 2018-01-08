Rails.application.routes.draw do
  root to: 'static_pages#root'
  # TODO: Make sure that nested is right
  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resource :session, only: [:create, :destroy]
    resources :workouts, except: :new
    get 'total_run_distance', to: 'workouts#total_run_distance'
    get 'total_ride_distance', to: 'workouts#total_ride_distance'
    get 'longest_distance', to: 'workouts#longest_distance'
    get 'longest_duration', to: 'workouts#ongest_duration'
    get 'total_runs', to: 'workouts#total_runs'
    get 'total_rides', to: 'workouts#total_rides'
    get 'fasted_speed', to: 'workouts#fasted_speed'

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

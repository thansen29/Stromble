Rails.application.routes.draw do
  root to: 'static_pages#root'
  # TODO: Make sure that nested is right
  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resource :session, only: [:create, :destroy]
    resources :workouts, except: :new
    get 'total_run_distance', to: 'workouts#total_run_distance'
    get 'total_ride_distance', to: 'workouts#total_ride_distance'
    get 'total_longest_distance', to: 'workouts#total_longest_distance'
    get 'total_longest_duration', to: 'workouts#total_longest_duration'
    get 'total_total_runs', to: 'workouts#total_total_runs'
    get 'total_total_rides', to: 'workouts#total_total_rides'
    get 'total_fasted_speed', to: 'workouts#total_fasted_speed'

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

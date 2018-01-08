Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resource :session, only: [:create, :destroy]
    resources :workouts do
      get :total_distance, on: :member
      get :longest_distance, on: :member
      get :longest_duration, on: :member
      get :total_runs, on: :member
      get :total_rides, on: :member
      get :fasted_speed, on: :member
    end
  end
end

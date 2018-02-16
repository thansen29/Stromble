Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resources :users, only: %i[create update] do
      member do
        get :followers
        get :following
        patch :follow
        delete :unfollow
      end
    end
    resources :users, only: :show
    resource :session, only: [:create, :destroy]
    resources :workouts, except: :new
    resources :routes, only: [:index, :show, :create, :destroy]
    get 'search', to: 'search#query'
    get 'total_run_distance/:id', to: 'statistics#total_run_distance'
    get 'total_ride_distance/:id', to: 'statistics#total_ride_distance'
    get 'longest_run_distance/:id', to: 'statistics#longest_run_distance'
    get 'longest_ride_distance/:id', to: 'statistics#longest_ride_distance'
    get 'longest_run_duration/:id', to: 'statistics#longest_run_duration'
    get 'longest_ride_duration/:id', to: 'statistics#longest_ride_duration'
    get 'total_runs/:id', to: 'statistics#total_runs'
    get 'total_rides/:id', to: 'statistics#total_rides'
    get 'fasted_speed/:id', to: 'statistics#fasted_speed'
  end
end

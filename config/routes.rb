Rails.application.routes.draw do
  get 'emotweets/index'
  get 'emotweets/new'
  get 'emotweets/create'
  get 'emotweets/destroy'
  root "top#index"
  get "auth/:provider/callback", to: "user_sessions#create"
  post "auth/:provider/callback", to: "user_sessions#create"
  get "sign_out", to: "user_sessions#destroy"

  namespace :api, {format: "json"} do
    resources :top, only: :index
  end
end

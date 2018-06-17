Rails.application.routes.draw do
  namespace :api, {format: "json"} do
    resources :top, only: :index
    resources :emotweet, only: :create
  end

  get "emotweets/new"
  root "top#index"
  get "auth/:provider/callback", to: "user_sessions#create"
  post "auth/:provider/callback", to: "user_sessions#create"
  get "sign_out", to: "user_sessions#destroy"
end

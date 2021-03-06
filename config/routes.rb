Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :show]
    resource :session, only:[:create, :destroy]
    resources :projects, only: [:index, :create, :update, :destroy, :show]
    resources :steps, only: [:index, :create, :update, :destroy, :show]
    resources :comments, only: [:index, :create, :destroy, :show]
    resources :keywords, only: [:index]
  end
  root to: "static_pages#root"
end

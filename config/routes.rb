Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :reservations, only: [:create, :show]
    resources :users, only: [:create, :show, :destroy, :update, :index]
    resource :session, only: [:create, :destroy]
    resources :locations, only: [:index, :show] 
  end
end

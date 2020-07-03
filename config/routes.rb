Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    namespace :api, defaults: {format: :json} do
        resources :users, only: [:create]
        resource :session, only: [:create, :destroy]
        resources :tracks, only: [:index, :show]
        resources :annotations, only: [:create, :update, :destroy, :show]        
    end
  root "static_pages#root"
end

Rails.application.routes.draw do

  
  get 'hello_world', to: 'hello_world#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "home#index"

  devise_for :users, controllers: { omniauth_callbacks: 'omniauth_callbacks' }

  resources :projects
  
end
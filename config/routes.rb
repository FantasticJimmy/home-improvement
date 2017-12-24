Rails.application.routes.draw do

  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "home#index"

  devise_for :users, controllers: { omniauth_callbacks: 'omniauth_callbacks' }

  resources :projects do
    get '/author' => 'projects#get_project_author'
  end
  
end
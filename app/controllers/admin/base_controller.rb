class Admin::BaseController < ApplicationController
    before_action :authenticate_user!
    def authorized?
        #check if authorized here.
        unless current_user.is_admin?
            redirect_to projects_path
        end
    end    
end
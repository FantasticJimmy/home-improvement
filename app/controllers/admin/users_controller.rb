class Admin::UsersController < Admin::BaseController
    before_action :authorized?
    before_action :set_user, only: [:update, :edit, :destroy]
    
    def index
        @users = User.all
    end

    def edit

    end
    

    def destroy
        @user.destroy
        redirect_to admin_users_path        
    end
    
    private
    def set_user
        @user = User.find(params[:id])
    end
end
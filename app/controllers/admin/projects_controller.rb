class Admin::ProjectsController < Admin::BaseController
    before_action :authorized?
    before_action :set_project, only: [:update, :edit, :destroy]
    
    def index
        @projects = Project.all
    end

    def edit

    end
    
    def update
        @project.update(params.permit(:name, :description, :privacy, :est_effort, :act_effort, :status))
        redirect_to admin_projects_path
    end

    def destroy
        @project.destroy
        redirect_to admin_projects_path        
    end
    
    private
    def set_project
        @project = Project.find(params[:id])
    end
end
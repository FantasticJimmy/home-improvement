class ProjectsController < ApplicationController
    before_action :authenticate_user!
    before_action :set_project, only: [:update, :edit]
    before_action :check_owner, only: [:edit]
    include JsonParser
    include Response
    def index
        @projects_json = {projects: Project.published.as_json}
    end

    def create
        new_project = current_user.projects.create(project_params)
        if new_project.save
            json_response(new_project)
        else          
            error_response(new_project)
        end
    end

    def edit
    end

    def update
        new_params = params.permit(:name, :description, :privacy, :est_effort, :act_effort, :status)
        @project.update(new_params)
        redirect_to projects_path
    end

    def get_project_author
        unless project = Project.find_by_id(params[:project_id])
            error_response(project) and return           
        end            
        unless user = project.user
            error_response(user) and return           
        end
        json_response(user)        
    end

    private
        def project_params
            new_params = ActionController::Parameters.new(parse(params['payload']))
            parsed_params = new_params.permit(:name, :description, :privacy, :est_effort, :act_effort, :status)
        end

        def set_project
            @project = Project.find(params[:id])
        end

        def check_owner
            if @project.user.id != current_user.id
                flash[:notice] = 'You have no access to that.'
                redirect_to projects_path
            end
        end
end
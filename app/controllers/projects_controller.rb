class ProjectsController < ApplicationController
    before_action :authenticate_user!
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

    def show
        @project_json = {project: Project.find(params[:id])}
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
            parsed_params = new_params.permit(:name, :description, :privacy, :est_effort)
        end
end
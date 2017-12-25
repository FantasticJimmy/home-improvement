class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  include ReactOnRails::Controller

  def after_sign_in_path_for
    projects_path
  end


  def load_commentable
    resource, id = request.path.split('/')[1,2]
    unless @commentable = resource.singularize.classify.constantize.find_by_id(id)
      render_404
    end
  end
  
end

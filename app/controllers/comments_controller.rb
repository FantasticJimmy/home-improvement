class CommentsController < ApplicationController
  before_action :authenticate_user!    
  before_action :load_commentable
  include JsonParser
  
  def create
    content = parse(params['payload'])
    comment = @commentable.comments.build(content: content, user_id: current_user.id)
    comment.save
    comment_json = comment.as_json
    comment_json[:author_name] = comment.user.name
    render json: comment_json, stauts: :ok
  end

  def index
    binding.pry
  end

end
class CommentsController < ApplicationController
  before_action :authenticate_user!    
  before_action :load_commentable
  include JsonParser
  
  def create
    content = parse(params['payload'])
    comment = @commentable.comments.build(content: content, user_id: current_user.id)
    comment.save
    comment_json = comment.as_json
    comment_json[:user] = {name: comment.user.name}
    render json: comment_json, stauts: :ok
  end

  def index
    comments = @commentable.comments.includes(:user)
    comments_json = comments.as_json(include: {user:{ only: [:name]}})
    render json: comments_json, status: :ok
  end

end
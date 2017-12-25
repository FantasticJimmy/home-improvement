class Admin::CommentsController < Admin::BaseController
    before_action :authorized?
    before_action :set_comment, only: [:update, :edit, :destroy]
    
    def index
        @comments = Comment.all
    end

    def edit

    end
    
    def update
        @comment.update(params.permit(:content))
        redirect_to admin_comments_path
    end

    def destroy
        @comment.destroy
        redirect_to admin_comments_path        
    end
    
    private
    def set_comment
        @comment = Comment.find(params[:id])
    end

    
end
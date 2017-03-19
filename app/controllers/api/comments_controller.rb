class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render :show
    else
      render json: ["invalid comment"], status: 403
    end
  end

  def show
    @comment = Comment.find_by(id: params[:id])
    render :show
  end

  def index
    @comments = Comment.where(project_id: params[:project_id])
    if @comments
      render :index
    else
      render json: ["no comments"], status: 202
    end
  end

  def destroy
  end

  private
  def comment_params
    params.require(:comment).permit(:author_id, :project_id, :description)
  end
end

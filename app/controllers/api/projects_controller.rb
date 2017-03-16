class Api::ProjectsController < ApplicationController
  before_action :require_login, only: [:create]
  def index
    @projects = Project.all
    render :index
  end
  def create
    @project = Project.new(project_params)
    if @project.save
      render 'api/projects/show'
    else
      render json: @project.errors.full_messages, status: 404
    end
  end

  def show
    @project = Project.find_by(id: params[:id])
    if @project
      render :show
    else
      render json: ["no project"], status: 403
    end
  end

  # def update
  # end

  def destroy
    @project = Project.find_by(id: params[:id]);
    if @project
      @project.destroy
      render "api/projects/show"
    else
      render json: ["no project"], status: 404
    end
  end

  private

  def project_params
    params[:project][:author_id] = current_user.id
    params.require(:project).permit(:title, :body, :author_id, :featured, :archived)
  end
end

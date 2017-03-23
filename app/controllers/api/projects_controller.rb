class Api::ProjectsController < ApplicationController
  # before_action :require_login, only: [:create]
  def index
    if(params[:find_user_id])
      @projects = Project.find_projects_by_user_id(params[:find_user_id])
    else
      @projects = Project.all
    end
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

  def update
    @project = Project.find_by(id: params[:id])
    if @project && @project.update(project_params)
      render :show
    else
      if @project
        render json: @project.errors.full_messages, status: 402
      else
        render json: ["no project"], status: 404
      end
    end
  end

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
    params.require(:project).permit(:title, :body, :author_id, :featured, :archived, :img_url)
  end
end

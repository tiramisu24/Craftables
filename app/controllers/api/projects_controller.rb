class Api::ProjectsController < ApplicationController
  before_action :require_login
  def create
    @project = Project.new(project_params)
    if @project.save
      render 'api/projects/show'
    else
      render json: @project.errors.full_messages, status: 404
    end
  end

  # def update
  # end

  # def destroy
  #
  # end

  private

  def project_params
    params[:project][:author_id] = current_user.id
    params.require(:project).permit(:title, :body, :author_id, :featured, :archived)
  end
end

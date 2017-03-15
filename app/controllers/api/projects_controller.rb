class Api::ProjectsController < ApplicationController
  before_action :require_log_in
  def create
    @project = Project.new(project_params)
    if @project.save
      render 'api/show/project'
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
    params[:user][:author_id] = current_user.id
    params.require(:project).permit(:title, :body, :author_id)
  end
end

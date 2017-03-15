class Api::ProjectsController < ApplicationController
  def create
    @project = Project.new(project_params)
    if @project.save
      render 'api/show/project'
    else

    end
  end

  def update

  end

  def destroy

  end

  private

  def project_params
    params[:user][:author_id] = current_user.id
    params.require(:project).permit(:title, :body, :author_id)
  end
end

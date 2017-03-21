class Api::KeywordsController < ApplicationController
  def index
    params[:keyword] = "up house"
     projectIds= Keyword.getProjects(params[:keyword])
    @projects =projectIds.map { |el| Project.find_by(id: el) }
    debugger
    if @projects
      render "api/projects/index"
    else
      render json: ["no projects"], status: 404
    end
  end

end

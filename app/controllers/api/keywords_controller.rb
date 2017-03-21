class Api::KeywordsController < ApplicationController
  def index

    projectIds= Keyword.getProjects(params[:keyword])
    @projects =projectIds.map { |el| Project.find_by(id: el) }
    if @projects.length >0
      render "api/projects/index"
    else
      render json: ["no projects"], status: 404
    end
  end

end

class Api::KeywordsController < ApplicationController
  def index
    params[:keyword] = "fish";
    @projects = Keyword.getProjects(params[:keyword])
    if @projects
      render "api/projects/index"
    else
      render json: ["no projects"], status: 404
    end
  end

end

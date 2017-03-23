class Api::KeywordsController < ApplicationController
  def index
    if(params[:partial])
      @keywords = Keyword.getKeywords(params[:partial])
      render :show
    else
      projectIds= Keyword.getProjects(params[:keyword])
      @projects =projectIds.map { |el| Project.find_by(id: el) }
      render "api/projects/index"
    end

  end

end

class Api::KeywordsController < ApplicationController
  def index

    projectIds= Keyword.getProjects(params[:keyword])
    @projects =projectIds.map { |el| Project.find_by(id: el) }
    render "api/projects/index"
    
  end

end

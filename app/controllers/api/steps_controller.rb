class Api::StepsController < ApplicationController
  def index
    @steps = Step.find_by(project_id: params[:project_id])
    render :index
  end
  def create
    @step = Step.new(step_params)
    if @step.save
      render :show
    else
      render json: ["invalid step"], status: 407
    end
  end

  def show
    @step = Step.find_by_id(params[:id])
    if @step
      render :show
    else
      render json: ["no step found"], status: 408
    end
  end

  private
  def step_params
    params.require(:step).permit(:stepNum, :title, :body, :project_id)
  end

  # def index
  # end
end

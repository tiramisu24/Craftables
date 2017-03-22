class Api::StepsController < ApplicationController
  def index
    @steps = Step.find_by(project_id: params[:project_id])
    render :index
  end

  def create
    # if (step_params[:title] == "" && step_params[:body] == "")
    #   render json: ["empty step"], status: 202
    # end

    @step = Step.new(step_params)
    debugger

    if @step.save
      render :show
    else
      render @step.errors.full_messages, status: 404
    end
  end

  def update
    @step = Step.find_by(id: params[:id])
    if @step && @step.update(step_params)
      render :show
    else
      if @step
        render @step.errors.full_messages, status: 402
      else
        render json: ["no step"], status: 404
      end
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
    params.require(:step).permit(:stepNum, :title, :body, :project_id, img_urls: [])
  end

end

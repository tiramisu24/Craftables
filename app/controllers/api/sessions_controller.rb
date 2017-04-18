class Api::SessionsController < ApplicationController
  # before_action :require_login, only: [:destroy]

  def create
    @user = User.find_by_credentials(user_params[:username], user_params[:password])
    if @user
      log_in(@user)
      render 'api/users/show'
    else
      render json: ['Invalid Credentials'], status: 422
    end
  end

  def destroy
    @user = current_user
    if @user
      log_out
      render 'api/users/show'
    else
      render json: ["no user"], status: 202
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :image_url)
  end
end

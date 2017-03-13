class Api::SessionController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params[:username], user_params[:password])
    if @user
      log_in(@user)
    else
      render json: "wrong credentials", status 401
    end
  end

  def destroy
    user = current_user
    log_out
    render json: current_user
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :image_url)
  end
end

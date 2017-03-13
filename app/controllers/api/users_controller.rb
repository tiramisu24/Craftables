class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      render :show
    else
      render json: @user.errors.flash_errors, status: 422
    end
  end


  def update
    @user = user.find_by_id(user_params[:id], user_params[:password])
    if @user && @user.update(user_params)
      render :show
    else
      if @user
        render json: @user.errors.flash_errors, status: 401
      else
        render json: "no user", status 404
      end
    end

  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :image_url)
  end
end

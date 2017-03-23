class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      log_in(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    render :show
  end


  def update
    @user = User.find_by(id: params[:id])
    if @user && @user.update(user_params)
      render :show
    else
      if @user
        render json: @user.errors.full_messages, status: 401
      else
        render json: "no user", status: 404
      end
    end

  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :bio, :img_url)
  end
end

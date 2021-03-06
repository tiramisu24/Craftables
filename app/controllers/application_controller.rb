class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :log_in?

  def log_in(user)
    session[:session_token] = user.reset_token
    @current_user = user
  end

  def log_in?
    !!current_user
  end

  def log_out
    @current_user.reset_token
    session[:session_token] = nil
    @current_user = nil
  end

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  # def require_login
  #   unless log_in?
  #     render json: ["not logged in"], status: 422
  #   end
  # end
end

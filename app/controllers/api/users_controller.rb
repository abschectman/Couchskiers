class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find(params[:id])
    if session[:session_token] == @user.session_token && @user.update(user_params)
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end

  end

  def index
    @users = User.all
    render json: @users
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    logout
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

private
  def user_params
    params.require(:user).permit(:email, :password, :hosting_status, :description, :location_id)
  end

  # def user_edit_params
  #   params.permit(:email, :password, :hosting_status, :description, :location_id)
  # end
end

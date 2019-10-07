class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render json: @user
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def edit
    @user = User.find(params[:id])
    if @user.update
      login(@user)
    else
      render json: @user.errors.full_messages, status: 422
    end

  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    logout
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

private
  def user_params
    params.require(:user).permit(:email, :password, :hosting_status, :description, :location_id)
  end
end

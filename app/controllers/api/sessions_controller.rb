class Api::SessionsController < ApplicationController
  def create
     @user = User.find_by(email: params[:user][:email])
    if @user && @user.is_password?(params[:user][:password])
      login(@user)
      render :show
    else
      render json: ["Invalid Username or Password"], status: 422
    end
  end

  def destroy
    logout
  end
end
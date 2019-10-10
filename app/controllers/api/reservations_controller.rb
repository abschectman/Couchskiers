class ReservationsController < ApplicationController
  def create
    @reservation = Reservation.new(res_params)
     if @reservation.save
      render :create
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end

  # def show
  #   @reservation = Reservation.find(params[:id])
  #   render :show
  # end

end
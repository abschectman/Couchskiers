class Api::ReservationsController < ApplicationController
  def create
    @reservation = Reservation.new(res_params)
     if @reservation.save
      render json: @reservation
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end

  # def show
  #   @reservation = Reservation.find(params[:id])
  #   render :show
  # end

  def res_params 
    params.require(:reservation).permit(:start_date, :end_date, :reservation_message, :host_id, :reserver_id, :booked)
  end
end
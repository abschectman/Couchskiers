class Api::ReferencesController < ApplicationController
  def create
    @reference = Reference.new(ref_params)
     if @reference.save
      render json: @reference
    else
      render json: @reference.errors.full_messages, status: 422
    end
  end

  def ref_params 
    params.require(:references).permit(:start_date, :end_date, :reservation_message, :host_id, :reserver_id, :booked)
  end
end
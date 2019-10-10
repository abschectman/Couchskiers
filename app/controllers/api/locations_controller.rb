class Api::LocationsController < ApplicationController
  def index
    @locations = Location.all
    @string = params[:string]
    @selected = @locations.select{|location| location.city[0...@string.length].downcase == @string.downcase}
    
    render json: @selected[0..2]
  end

  def show
    @location = Location.find(params[:id])
    if @location 
        render :show
    else
      render json: ["No Such Location"], status: 422
    end
  end
end
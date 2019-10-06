class Api::LocationsController < ApplicationController
  def index
    @locations = Location.all
    @string = params[:string]
    @selected = @locations.select{|location| location.city[0...@string.length].downcase == @string.downcase}
    render json: @selected[0..2]
  end

  def show
    @location = Location.find(params[:id])
    render json: @location
  end
end
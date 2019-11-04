class Api::LocationsController < ApplicationController
  def index
    @string = params[:string]
    @locations = Location.where("lower(locations.city) like '#{@string}%'")
    render json: @locations[0..2]
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
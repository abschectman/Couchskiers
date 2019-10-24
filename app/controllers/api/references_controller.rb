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
    params.require(:reference).permit(:body, :referer_id, :subject_id, :positive, :ref_type)
  end
end
class Api::RoutesController < ApplicationController
  def index
    @routes = Route.all.where(user_id: current_user.id)
  end

  def show
    @route = Route.find(params[:id])
  end

  def create
    @route = Route.new(route_params)
    if @route.save
      render :show
    else
      render json: { route: "You must choose a start and end point" }, status: 422
    end
  end

  def destroy
    route = Route.find(params[:id])
    route.destroy!
    render json: {}
  end

  private
  def route_params
    params.require(:route).permit(:user_id, :title, :start_lat, :start_lng,
    :end_lat, :end_lng, :distance, :distance_unit, :elevation_gain, :elevation_unit,
    :private )

  end
end

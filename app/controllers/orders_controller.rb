class OrdersController < ApplicationController
  before_action :set_order, only: [:show, :update, :destroy]

  # GET /orders
  def index
    @orders = Order.all

    render json: @orders, include: {user: {only: [:address, :username]}}
  end

  # GET /orders/1
  def show
    render json: @order, include: [:user]
  end

 

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_order
      @order = Order.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def order_params
      params.require(:order).permit(:user_id, :user_name, :product_id, :address)
    end
end

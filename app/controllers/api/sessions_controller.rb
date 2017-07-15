class Api::SessionsController < ApplicationController
  def create
  end

  def destroy
    if logged_in?
      logout!
      render {}
    else
      render json: ["No user logged in!"], status: 404
    end

  end
end

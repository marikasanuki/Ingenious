class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:username])

        if @user
            login!(@user)
            render 'api/users/show'
        else
            render json: ['Password is not valid'], status: 401
        end
    end

    def destroy
        logout!
    end

end

class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:username])

        if @user
            login!(@user)
            render 'api/users/show'
        else
            render json: ['Login is not valid'], status 401
        end
    end

    def destroy
        @user = current_user
        if @user
            logout!
            render 'api/users/show'
        else
            render json: ['You are not currently signed in'], status: 404
        end
    end

end

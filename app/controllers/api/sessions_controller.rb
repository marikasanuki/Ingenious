class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

        if @user
            login!(@user)
            render 'api/users/show'
        else
            if params[:user][:username] == '' && params[:user][:password] == ''
                render json: ['You did not provide any details for authentication.'], status: 401
            elsif params[:user][:username] == ''
                render json: ['Login cannot be blank'], status: 401
            elsif params[:user][:password] == ''
                render json: ['Password cannot be blank'], status: 401        
            elsif User.find_by(username: params[:user][:username])
                render json: ['Password is not valid'], status: 401  
            else 
                render json: ['Login is not valid'], status: 401  
            end
        end
    end

    def destroy
        logout!
        render json: {}
    end

end

# Whoops
# There must be some mistake

# blank username and pw fields
# 'You did not provide any details for authentication.'


# w/password no username
# 'Login cannot be blank'

# w/username no password
# 'Password cannot be blank'

# Username doesn't exist in db
# 'Login is not valid'

# correct username wrong password
# 'Password is not valid'
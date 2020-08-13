class Api::UsersController < ApplicationController
    
    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render 'api/users/show'
        else    
            error_message = []
                @user.errors.full_messages.each do |error|
                    if error == "Username can't be blank"
                        error_message << "Username can't be blank"
                    elsif error == "Password is too short (minimum is 4 characters)" 
                        error_message << 'Enter a password'
                    elsif error == "Username has already been taken"
                        error_message << 'That username is taken!'
                    else
                        error_message << error
                    end
                end
            render json: error_message, status: 401
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :password)
    end

end

class Api::VotesController < ApplicationController

    before_action :ensure_logged_in, only: [:create, :update, :destroy]

    def create
        @vote = Vote.new(vote_params)
        @vote.author_id = current_user.id


    end

    def update
    end

    
    def destroy

    end


    private

    def vote_params
        params.require(:vote).permit(:value)
    end

end
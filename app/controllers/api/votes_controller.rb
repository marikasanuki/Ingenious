class Api::VotesController < ApplicationController

    before_action :ensure_logged_in, only: [:create, :update, :destroy]

    def create
        @vote = Vote.new(vote_params)
        @vote.author_id = current_user.id
        if @vote.save!
            if @vote.votable_type == 'Annotation'
                @annotation = Annotation.find(@vote.votable_id)
                render 'api/annotations/show'
            elsif @vote.votable_type == 'Comment'
                @comment = Comment.find(@vote.votable_id)
                render 'api/comments/show'
            end
        else
            render json: @vote.errors.full_messages, status: 422
        end
    end

    def update
        @vote = Vote.find(params[:id])
        if @vote.votable_type == 'Annotation' && @vote.update_attributes(vote_params) 
            @annotation = Annotation.find(@vote.votable_id)
            render 'api/annotations/show'
        elsif @vote.votable_type == 'Comment' && @vote.update_attributes(vote_params)
            @comment = Comment.find(@vote.votable_id)  #passing @comment instance v to comments show.jason.jbuilder 
            render 'api/comments/show'
        else
            render @vote.errors.full_messages, status: 401
        end
    end
    
    def destroy
        @vote = Vote.find(params[:id])

        if @vote.author_id == current_user.id && @vote.destroy!
            if @vote.votable_type == 'Annotation'
                @annotation = Annotation.find(@vote.votable_id)
                render 'api/annotations/show'
            elsif @vote.votable_type == 'Comment'
                @comment = Comment.find(@vote.votable_id)
                render 'api/comments/show'
            end
        else
            render json: @vote.errors.full_messages, status: 422
        end
    end

    private

    def vote_params
        params.require(:vote).permit(:value, :author_id, :votable_type, :votable_id)
    end

end
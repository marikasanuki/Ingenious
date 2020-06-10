class Api::AnnotationsController < ApplicationController

    before_action :ensure_logged_in, only [:create, :update, :destroy]

    def create
        
        @annotation = Annotation.new(annotation_params)
        # need user connection? @annotation.author_id = user.id?

        if @annotation.save!
            render 'api/annotations/show'
        else
            render json: @annotation.errors.full_messages, status: 422
        end
    end

    def show
        @annotation = Annotation.find(params[:id])
        render 'api/annotations/show'
    end

    def update
        @annotation = Annotation.find(params[:id])
        
        if @annotation && @annotation.update_attributes(annotation_params) 
            render 'api/annotations/show'
        elsif !@annotation
            render json: ['No such annotation exists'], status: 400
        else
            render @annotation.errors.full_messages, status: 401
        end
    end

    def destroy
        @annotation = Annotation.find(params[:id])
        if @annotation.author_id == user.id
            @annotation.destroy
            render 'api/annotations/show'
        else
            render json: ['No such annotation exists'], status: 400
        end
    end

    private

    def annotation_params
        params.require(:annotation).permit(:annotation, :author_id, :track_id)

    end

end

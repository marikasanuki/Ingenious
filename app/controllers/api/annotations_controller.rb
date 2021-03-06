class Api::AnnotationsController < ApplicationController

    before_action :ensure_logged_in, only: [:create, :update, :destroy]

    def create
        @annotation = Annotation.new(annotation_params)
        @annotation.author_id = current_user.id
        #(check params if @annotation has track_id already)
        #@annotation.track_id = Track.find(params[:track_id])

        if @annotation.save!
            render :show
        else
            # p @annotation.errors.full_messages
            render json: @annotation.errors.full_messages, status: 422
        end
    end

    def show
        @annotation = Annotation.find(params[:id])
        render :show
    end

    def update
        @annotation = Annotation.find(params[:id])
        if @annotation && @annotation.update_attributes(annotation_params) 
            render :show
        elsif !@annotation
            render json: ['No such annotation exists'], status: 400
        else
            render @annotation.errors.full_messages, status: 401
        end
    end

    def destroy
        @annotation = Annotation.find(params[:id])
        if @annotation.author_id == current_user.id
            @annotation.destroy
            render :show
        else
            render json: ['Cannot delete annotation'], status: 400
        end
    end

    private

    def annotation_params
        params.require(:annotation).permit(:anno_body, :author_id, :track_id, :start_idx, :end_idx, :id)
    end

end

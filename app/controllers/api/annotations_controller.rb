class Api::AnnotationsController < ApplicationController



# def show
#     @annotation = Track.find(params[:track_id])
#     render 'api/annotations/show'
# end


# def create
#     @annotation = Annotation.new(annotation_params)
#     # need user connection? @annotation.author_id = user.id?

#     if @annotation.save
#         render 'api/annotations/show'
#     else
#         render json: @annotation.errors.full_messages, status: 422
#     end
# end

# def update
#     render 'api/annotations/show'
# end

# def destroy

# end

# private

# def annotation_params
#     params.require(:annotation).permit(:annotation, :author_id, :track_id)

# end

end

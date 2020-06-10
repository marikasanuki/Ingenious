class Api::AnnotationsController < ApplicationController
end

def show
    @annotation = Track.find(params[:track_id])
    render 'api/annotations/show'
end


def create
    render 'api/annotations/show'
end

def update
    render 'api/annotations/show'
end

def destroy
    render 'api/annotations/show'
end

private

def annotation_params
    params.require(:annotation).permit(:annotation, :author_id, :track_id)

end
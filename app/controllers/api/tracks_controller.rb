class Api::TracksController < ApplicationController

    def index
        @tracks = Track.all
        render :index
    end

    def show
        @track = Track.find(params[:id])
        render :show
        # @track = Track.where(artist: '?', title: '?')

    end

end

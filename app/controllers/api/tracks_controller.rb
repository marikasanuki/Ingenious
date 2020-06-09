class Api::TracksController < ApplicationController

    def index
        @tracks = Track.all
        render :index
    end

    def show
        @track = Track.find(params[:id])
        # @track = Track.where(artist: '?', title: '?')
        render :show

    end

end

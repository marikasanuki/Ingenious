json.extract! @track, :id, :title, :artist, :album, :lyrics, :conc_views, :total_views
    begin
        json.image_url asset_path("track_images/#{@track.image_url}")
    rescue 
        json.image_url @track.image_url
    end

# debugger
@track.annotations.includes(:user).each do |annotation|
    # debugger
    json.annotations do 
        json.set! annotation.id do 
            json.set! :username, annotation.user.username #new refactor--instead of anno_authors?
            json.extract! annotation, :id, :anno_body, :author_id, :track_id, :start_idx, :end_idx, :all_votes
        end
    end
    json.anno_authors do 
        json.set! annotation.user.id do 
            json.extract! annotation.user, :id, :username
        end
    end
end



# same as above code
# json.id @track.id
# json.title @track.title
# json.artist @track.artist
# json.album @track.album
# json.lyrics @track.lyrics
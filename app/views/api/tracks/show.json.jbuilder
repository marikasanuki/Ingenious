json.extract! @track, :id, :title, :artist, :album, :lyrics
# debugger
@track.annotations.includes(:user).each do |annotation|
    # debugger
    json.annotations do 
        json.set! annotation.id do 
            json.extract! annotation, :id, :annotation, :author_id, :track_id
        end
    end
    json.authors do 
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
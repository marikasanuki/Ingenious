# json. will allow you to access the json object

# json.title "lalala" => we can use this format to create a new JS object {"title" : "lalala"}
# json.array! @tracks  => will extract every piece of information from the object and in the database

# json.array! @tracks, :id, :title, :artist, :album, :lyrics => will allow us to pluck out limited attributes from the object as an array of objects.

@tracks.each do |track|
    json.set! track.id do 
        json.extract! track, :id, :title, :artist, :album, :lyrics

        begin
            json.image_url asset_path("track_images/#{track.image_url}")
        rescue
            json.image_url track.image_url
        end

    end
end

# json.photoUrl url_for(track.photo)
# same as above code
# @tracks.each do |track|
#     json.set! track.id do 
#         json.id track.id
#         json.title track.title
#         json.artist track.artist
#         json.album track.album
#         json.lyrics track.lyrics
#     end
# end
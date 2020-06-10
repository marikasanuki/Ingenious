json.annotations do
    json.set! @annotation.id do 

        json.extract! @annotation, :id, :annotation, :author_id, :track_id

    end
end
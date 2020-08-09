@comments.each do |comment|

    json.set! comment.id do 
        json.extract! comment, :id, :comment_body, :author_id, :track_id
    end

end
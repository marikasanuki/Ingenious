@comments.each do |comment|

    json.set! comment.id do 
        json.extract! comment, :id, :comment_body, :author_id, :track_id
    end
    json.comment_authors do 
        json.set! comment.user.id do 
            json.extract! comment.user, :id, :username
        end
    end
end


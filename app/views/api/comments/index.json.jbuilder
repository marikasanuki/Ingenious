@comments.each do |comment|

    json.set! comment.id do 
        json.extract! comment, :id, :comment_body, :author_id, :track_id, :all_votes
        json.set! :username, comment.user.username  #new refactor--instead of comment_authors?
        # json.votes do
        #     comment.votes.each do |vote|
        #         json.set! vote.id do 
        #             json.id vote.id
        #             json.author_id vote.author_id
        #             json.value vote.value
        #         end
        #     end
        # end
    end
    json.comment_authors do 
        json.set! comment.user.id do 
            json.extract! comment.user, :id, :username
        end
    end
end
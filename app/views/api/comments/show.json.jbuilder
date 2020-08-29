json.extract! @comment, :id, :comment_body, :author_id, :track_id, :all_votes

# testing this jbuilder structure within each comment:
# json.votes do
#     @comment.votes.each do |vote|
#         json.set! vote.id do 
#             json.id vote.id
#             json.author_id vote.author_id
#             json.value vote.value
#         end
#     end
# end
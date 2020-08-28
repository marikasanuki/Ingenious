json.extract! @annotation, :id, :anno_body, :author_id, :track_id, :start_idx, :end_idx, :all_votes
json.set! :username, @annotation.user.username   #new refactor


# json.votes do
#     @annotation.votes.each do |vote|
#         json.set! vote.id do 
#             json.id vote.id
#             json.author_id vote.author_id
#             json.value vote.value
#         end
#     end
# end
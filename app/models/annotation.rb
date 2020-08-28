# == Schema Information
#
# Table name: annotations
#
#  id         :bigint           not null, primary key
#  anno_body  :text             not null
#  author_id  :integer          not null
#  track_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  start_idx  :integer
#  end_idx    :integer
#
class Annotation < ApplicationRecord

    validates :anno_body, :author_id, :track_id, presence: true

    belongs_to :user, 
        foreign_key: :author_id, 
        class_name: :User

    belongs_to :track, 
        foreign_key: :track_id,
        class_name: :Track
        
    has_many :votes, 
        as: :votable, 
        dependent: :destroy

    def all_votes
        # debugger
        votes.all
    end

end

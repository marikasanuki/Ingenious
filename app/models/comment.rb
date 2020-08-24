# == Schema Information
#
# Table name: comments
#
#  id           :bigint           not null, primary key
#  comment_body :text             not null
#  author_id    :integer          not null
#  track_id     :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Comment < ApplicationRecord

    validates :comment_body, :author_id, :track_id, presence: true

    belongs_to :user, 
    foreign_key: :author_id, 
    class_name: :User

    belongs_to :track, 
    foreign_key: :track_id,
    class_name: :Track

    has_many :votes, as: :votable, dependent: :destroy
    
end

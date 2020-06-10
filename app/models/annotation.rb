# == Schema Information
#
# Table name: annotations
#
#  id         :bigint           not null, primary key
#  annotation :text             not null
#  author_id  :integer          not null
#  track_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Annotation < ApplicationRecord

#     validates :annotation, :author_id, :track_id, presence: true

#     belongs_to :user, 
#         foreign_key: :author_id, 
#         class_name: :User

#     belongs_to :track, 
#         foreign_key: :track_id,
#         class_name: :Track

end

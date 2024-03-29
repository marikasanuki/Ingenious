# == Schema Information
#
# Table name: votes
#
#  id           :bigint           not null, primary key
#  author_id    :integer          not null
#  value        :integer          not null
#  votable_id   :integer          not null
#  votable_type :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Vote < ApplicationRecord
    
    validates :author_id, uniqueness: { scope: [:votable_id, :votable_type] }

    # only allows values of -1 to 1
    validates :value, :inclusion => -1..1

    belongs_to :votable, polymorphic: true

    belongs_to :user, 
        foreign_key: :author_id,
        class_name: :User
    
end

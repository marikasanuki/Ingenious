# == Schema Information
#
# Table name: tracks
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  artist      :string           not null
#  album       :string           not null
#  lyrics      :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  image_url   :string
#  conc_views  :integer
#  total_views :integer
#
class Track < ApplicationRecord

    validates :title, :artist, :album, :lyrics, presence: true

    has_one_attached :photo

    has_many :annotations, 
        foreign_key: :track_id,
        class_name: :Annotation,
        dependent: :destroy

    has_many :comments, 
        foreign_key: :track_id,
        class_name: :Comment,
        dependent: :destroy

end

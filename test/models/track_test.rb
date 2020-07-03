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
require 'test_helper'

class TrackTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

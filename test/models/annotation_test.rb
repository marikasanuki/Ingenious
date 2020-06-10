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
require 'test_helper'

class AnnotationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

class KeywordJoin < ApplicationRecord
  validates_uniqueness_of :keyword, :scope => :project

  belongs_to :keyword
  belongs_to :project
end

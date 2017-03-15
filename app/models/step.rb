class Step < ApplicationRecord
  validates :title, :stepNum, :project, :body, presence: true
  validates_uniqueness_of :stepNum, scope: [:project]
  validates_uniqueness_of :title, scope: [:project, :stepNum]

  belongs_to :project
end

class Step < ApplicationRecord
  validates :stepNum, :project, presence: true
  validates_uniqueness_of :stepNum, scope: [:project]
  validates_uniqueness_of :title, scope: [:project, :stepNum]
  validate :both_blank

  belongs_to :project
  private
  def both_blank
  end
end

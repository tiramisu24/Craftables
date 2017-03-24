class Comment < ApplicationRecord
  validates :project, :description, presence: true
  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  before_validation :ensure_author
  belongs_to :project

  def ensure_author
    if (! self.author_id)
      self.author_id = 4;
    end
  end
end

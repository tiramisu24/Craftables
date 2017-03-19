class Comment < ApplicationRecord
  validates :project, :description, presence: true
  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :project


end

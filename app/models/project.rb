class Project < ApplicationRecord
  validates :title, :body, :author, presence: true
  validates_uniqueness_of :title, :scope => :author_id
  before_validation :ensure_not_archived, :ensure_featured

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  has_many :steps

  has_many :comments

  private
  def ensure_not_archived
    self.archived ||= false
  end

  def ensure_featured
    self.featured ||= true
  end

  def all_featured_projects
    #TODO
  end

end

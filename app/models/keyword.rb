class Keyword < ApplicationRecord
  validates :keyword, presence: true, uniqueness: true
  has_many :key_joins,
    foreign_key: :keyword_id,
    class_name: :KeywordJoin

  has_many :projects,
    through: :key_joins,
    source: :project


  def self.getProjects(keyword)
    key = Keyword.find_by(keyword: keyword)
    key ? key.projects : []
  end
end

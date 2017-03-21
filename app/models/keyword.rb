class Keyword < ApplicationRecord
  validates :keyword, presence: true, uniqueness: true
  has_many :keyword_joins,
    foreign_key: :keyword_id,
    class_name: :KeywordJoin

  has_many :projects,
    through: :keyword_joins,
    source: :project


  def self.getProjectIds(keyphrase)
    phrase = keyphrase.split(" ")
    projectIds = Keyword.select("projects.id")
                 .joins(:projects)
                 .where(keyword: phrase)
                 .group("projects.id")
                 .having("COUNT(keywords.id) >= ?", (phrase.length))








  end

  def self.getProjects(keyphrase)
    projectIds = getProjectIds(keyphrase)

      project_id = projectIds.pluck("projects.id")


    return project_id
  end
end

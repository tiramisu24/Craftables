class Step < ApplicationRecord
  validates :stepNum, :project, presence: true
  validates_uniqueness_of :stepNum, scope: [:project]
  validates_uniqueness_of :title, scope: [:project, :stepNum]
  validate :both_blank

  after_commit :save_keys, :on => :create

  belongs_to :project

  BASIC_WORDS =[
    "a", "and", "at", "by", "the", "is", "was", "this","that"
  ]
  private
  def both_blank
  end

  def save_keys
    title_keywords = self.title.downcase.split(" ") - BASIC_WORDS
    # body_keywords = self.body.downcase.split(" ") - BASIC_WORDS
    title_keywords.map do |word|
      temp_keyword = Keyword.find_by(keyword: word)
      if(!temp_keyword)
        temp_keyword = Keyword.create(keyword: word)
      end
      KeywordJoin.create(keyword_id: temp_keyword.id, project_id: self.project_id)
    end
  end
end

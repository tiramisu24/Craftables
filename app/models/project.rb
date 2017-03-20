class Project < ApplicationRecord
  validates :title, :body, :author, presence: true
  validates_uniqueness_of :title, :scope => :author_id
  before_validation :ensure_not_archived, :ensure_featured

  after_commit :save_keys, :on => :create

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  has_many :steps

  has_many :comments

  has_many :key_joins

  has_many :keywords,
    through: :key_joins,
    source: :keyword

  BASIC_WORDS =[
    "a", "and", "at", "by", "the", "is", "was", "this","that"
  ]
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

  def save_keys
    title_keywords = self.title.downcase.split(" ") - BASIC_WORDS
    body_keywords = self.body.downcase.split(" ") - BASIC_WORDS

    body_keywords.concat(title_keywords).map do |word|
      temp_keyword = Keyword.find_by(keyword: word)
      if(!temp_keyword)
        temp_keyword = Keyword.create(keyword: word)
      end
      KeywordJoin.create(keyword_id: temp_keyword.id, project_id: self.id)
    end
  end

end

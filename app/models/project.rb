class Project < ApplicationRecord
    belongs_to :user
    has_many :comments, as: :commentable
    
    validates :name, presence: true, allow_blank: false
    scope :published, -> { where(privacy: 'public') }    
end
  
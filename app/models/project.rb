class Project < ApplicationRecord
    belongs_to :user
    validates :name, presence: true, allow_blank: false
    scope :published, -> { where(privacy: 'public') }    
end
  
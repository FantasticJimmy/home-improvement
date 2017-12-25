class Comment < ActiveRecord::Base
    belongs_to :commentable, polymorphic: true
    belongs_to :user

    validates :content, presence: true, allow_blank: false
end
  
  
class User < ApplicationRecord
  has_many :uploads
  validates :username, presence: true, uniquness: true
end

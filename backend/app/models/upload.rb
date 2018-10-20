class Upload < ApplicationRecord
  belongs_to :user




  def self.save_to_cloud(file)
    secret = {
      api_key: '849798354593861',
      api_secret: 'tnOitmb0b68metxrpGSpZ9nQF1A',
      cloud_name: 'crowd-capsule'
    }

    Cloudinary::Uploader.upload(file, secret)
  end

end

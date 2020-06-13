class AddImageUrlColumnToTracksTable < ActiveRecord::Migration[5.2]
  def change

    add_column :tracks, :image_url, :string

    
  end
end

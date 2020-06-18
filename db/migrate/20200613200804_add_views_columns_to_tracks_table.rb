class AddViewsColumnsToTracksTable < ActiveRecord::Migration[5.2]
  def change
        add_column :tracks, :conc_views, :integer
        add_column :tracks, :total_views, :integer
  end
end

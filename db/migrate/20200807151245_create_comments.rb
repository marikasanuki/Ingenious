class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
        t.text :comment_body, null: false
        t.integer :author_id, null: false
        t.integer :track_id, null: false
        t.timestamps
    end
  end
end

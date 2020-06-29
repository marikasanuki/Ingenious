class CreateAnnotations < ActiveRecord::Migration[5.2]
  def change
    create_table :annotations do |t|
        t.text :annotation, null: false
        t.integer :author_id, null: false
        t.integer :track_id, null: false
        t.timestamps
    end
  end
end

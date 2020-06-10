class CreateAnnotations < ActiveRecord::Migration[5.2]
  def change
    create_table :annotations do |t|
        t.text :annotation, null: false
        t.integer :author_id, null: false
        t.integer :track_id, null: false
        t.timestamps
    end
    add_index :annotations, :author_id, unique: true
    add_index :annotations, :track_id, unique: true
  end
end

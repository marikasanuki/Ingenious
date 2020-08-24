class CreateVotes < ActiveRecord::Migration[5.2]
  def change
    create_table :votes do |t|
        t.integer :author_id, null: false
        t.integer :value, null: false
        t.integer :votable_id, null: false
        t.string :votable_type, null: false

        t.timestamps
    end
    add_index :votes, :author_id
    add_index :votes, [:votable_type, :votable_id]
    add_index :votes, [:author_id, :votable_type, :votable_id], unique: true
  end
end

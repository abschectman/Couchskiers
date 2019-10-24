# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_10_24_125735) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "locations", force: :cascade do |t|
    t.string "city", null: false
    t.string "country", null: false
  end

  create_table "messages", force: :cascade do |t|
    t.string "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "references", force: :cascade do |t|
    t.integer "referer_id", null: false
    t.integer "subject_id", null: false
    t.text "body"
    t.boolean "positive"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "ref_type"
    t.index ["referer_id"], name: "index_references_on_referer_id"
    t.index ["subject_id"], name: "index_references_on_subject_id"
  end

  create_table "reservations", force: :cascade do |t|
    t.date "start_date", null: false
    t.date "end_date", null: false
    t.text "reservation_message"
    t.integer "host_id", null: false
    t.integer "reserver_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "booked"
    t.index ["host_id"], name: "index_reservations_on_host_id"
    t.index ["reserver_id"], name: "index_reservations_on_reserver_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "email", null: false
    t.text "description", null: false
    t.string "hosting_status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "location_id"
    t.string "provider"
    t.string "uid"
  end

end

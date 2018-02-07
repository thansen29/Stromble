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

ActiveRecord::Schema.define(version: 20180207230336) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "follows", force: :cascade do |t|
    t.integer "follower_id", null: false
    t.integer "followed_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["followed_id"], name: "index_follows_on_followed_id"
    t.index ["follower_id", "followed_id"], name: "index_follows_on_follower_id_and_followed_id", unique: true
    t.index ["follower_id"], name: "index_follows_on_follower_id"
  end

  create_table "routes", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "title", null: false
    t.float "start_lat", null: false
    t.float "start_lng", null: false
    t.float "end_lat", null: false
    t.float "end_lng", null: false
    t.float "distance", null: false
    t.string "distance_unit", default: "miles", null: false
    t.string "elevation_gain", null: false
    t.string "elevation_unit", default: "feet", null: false
    t.boolean "private", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "duration"
    t.text "description"
    t.text "path", default: [], array: true
    t.index ["user_id"], name: "index_routes_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "session_token", null: false
    t.string "password_digest", null: false
    t.string "fname"
    t.string "lname"
    t.date "birthday"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "avatar_file_name"
    t.string "avatar_content_type"
    t.integer "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  create_table "workouts", force: :cascade do |t|
    t.integer "user_id", null: false
    t.float "distance"
    t.string "distance_unit", default: "miles", null: false
    t.integer "duration_min", default: 0, null: false
    t.integer "duration_s", default: 0, null: false
    t.float "elevation"
    t.string "elevation_unit", default: "feet", null: false
    t.string "sport", default: "Run", null: false
    t.datetime "date", null: false
    t.datetime "time", null: false
    t.string "title", null: false
    t.text "description"
    t.boolean "private", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "duration_hr", default: 1, null: false
    t.string "activity_type"
    t.index ["user_id"], name: "index_workouts_on_user_id"
  end

end

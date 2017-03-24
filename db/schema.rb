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

ActiveRecord::Schema.define(version: 20170320210037) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.integer  "author_id"
    t.integer  "project_id",                        null: false
    t.string   "description", default: "Anonymous", null: false
    t.datetime "created_at",                        null: false
    t.datetime "updated_at",                        null: false
    t.index ["project_id"], name: "index_comments_on_project_id", using: :btree
  end

  create_table "keyword_joins", force: :cascade do |t|
    t.integer  "keyword_id", null: false
    t.integer  "project_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["keyword_id"], name: "index_keyword_joins_on_keyword_id", using: :btree
    t.index ["project_id"], name: "index_keyword_joins_on_project_id", using: :btree
  end

  create_table "keywords", force: :cascade do |t|
    t.string   "keyword",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["keyword"], name: "index_keywords_on_keyword", unique: true, using: :btree
  end

  create_table "projects", force: :cascade do |t|
    t.string   "title",      null: false
    t.text     "body",       null: false
    t.integer  "author_id",  null: false
    t.boolean  "archived",   null: false
    t.boolean  "featured",   null: false
    t.string   "img_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_projects_on_author_id", using: :btree
  end

  create_table "steps", force: :cascade do |t|
    t.integer  "stepNum",                 null: false
    t.string   "title",                   null: false
    t.text     "body",                    null: false
    t.integer  "project_id",              null: false
    t.string   "img_urls",   default: [],              array: true
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
    t.index ["project_id"], name: "index_steps_on_project_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.text     "bio"
    t.string   "img_url"
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end

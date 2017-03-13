# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
image_url       | string    | not null, indexed
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## Project
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
archived    | boolean   | not null, default: false
featured    | boolean   | not null, default: false
keywords    | string    | array, default: []

## keywords
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
word        | string    | not null
project_id  | integer   | not null, foreign key (references users), indexed

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
project_id  | integer   | not null, foreign key (references users), indexed
description | string    |

## image_table
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
media_url   | string    | not null
project_id  | integer   | not null, foreign key (references notes), indexed

## video_table
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
media_url   | string    | not null
project_id  | integer   | not null, foreign key (references notes), indexed

## favorite
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references tags), indexed
project_id  | integer   | not null, foreign key (references notes), indexed

## done
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references tags), indexed
project_id  | integer   | not null, foreign key (references notes), indexed

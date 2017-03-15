# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
image_url       | string    | not null
password_digest | string    | not null
session_token   | string    | not null, unique

## Project
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
archived    | boolean   | not null, default: false
featured    | boolean   | not null, default: false

## Steps
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
stepNum     | integer   | not null
title       | string    | not null
body        | text      | not null
project_id  | integer   | not null, foreign key, (references projects), indexed


## keywords
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
keyword     | string    | not null

## keyword_join
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
keyword_id  | integer   | not null, foreign key (references keyword), indexed
user_id     | integer   | not null, foreign key (references user), indexed

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
project_id  | integer   | not null, foreign key (references users), indexed
description | string    |

## images
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
image_url   | string    | not null
project_id  | integer   | foreign key (references notes), indexed
step_id     | integer   | foreign key

## videos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
video_url   | string    | not null
project_id  | integer   | not null, foreign key (references notes), indexed

## favorites
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references tags), indexed
project_id  | integer   | not null, foreign key (references notes), indexed

## dones
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references tags), indexed
project_id  | integer   | not null, foreign key (references notes), indexed

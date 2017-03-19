json.extract! comment, :id, :description, :created_at

json.author comment.author, partial: 'api/users/user', as: :user

json.extract! comment, :id, :description

json.author comment.author, partial: 'api/users/user', as: :user

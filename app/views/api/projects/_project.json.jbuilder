json.extract! project, :id, :title, :body, :img_url, :created_at

json.author do
  json.partial! 'api/users/user', user: project.author
end

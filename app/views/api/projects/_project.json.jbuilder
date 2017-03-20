json.extract! project, :id, :title, :body

json.author do
  json.partial! 'api/users/user', user: project.author
end

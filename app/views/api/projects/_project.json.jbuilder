json.extract! project, :id, :title, :body, :img_url

json.author do
  json.partial! 'api/users/user', user: project.author
end

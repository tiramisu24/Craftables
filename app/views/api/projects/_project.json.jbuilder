json.extract! project, :id, :title, :body

json.author do
  json.partial! 'api/users/user', user: project.author
end
json.steps project.steps do |step|
  json.partial! 'api/steps/step', step: step
end

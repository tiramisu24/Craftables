json.partial! 'api/projects/project', project: @project

# json.author @project.author, partial: 'api/users/user', as: :user

json.steps @project.steps do |step|
  json.partial! 'api/steps/step', step: step
end

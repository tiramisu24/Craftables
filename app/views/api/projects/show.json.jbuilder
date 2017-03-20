json.partial! 'api/projects/project', project: @project

# json.author @project.author, partial: 'api/users/user', as: :user

json.steps @project.steps do |step|
  json.partial! 'api/steps/step', step: step
end

# json.steps @project.steps

# json.steps do
#   json.partial! partial: 'api/steps/step', collection: @project.steps, as: :step
# end

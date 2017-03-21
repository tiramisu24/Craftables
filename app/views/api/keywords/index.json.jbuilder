json.projects do
    json.partial! partial: 'api/projects/project', collection: @keyword.projects, as: :project
end

# json.steps do
#   json.partial! partial: 'api/steps/step', collection: @project.steps, as: :step
# end

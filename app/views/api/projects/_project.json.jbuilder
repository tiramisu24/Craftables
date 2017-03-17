json.extract! project, :id, :title, :body

json.steps project.steps do |step|
  json.partial! 'api/steps/step', step: step
end

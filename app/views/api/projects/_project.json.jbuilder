json.extract! project, :id, :title, :body

json.steps project.steps, partial: 'api/steps/step', as: :step

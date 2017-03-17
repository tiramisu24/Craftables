json.partial! 'api/steps/step', step: @step

json.project @step.project, partial: 'api/projects/project', as: :project

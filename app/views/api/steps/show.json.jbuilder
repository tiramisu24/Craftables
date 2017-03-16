json.partial! 'api/steps/step', step: @step

step.project @step.project, partial: 'api/projects/project', as: :project

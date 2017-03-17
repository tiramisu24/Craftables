json.projects do
    @projects.each do |project|
      json.set! project.id, (json.project project, partial: 'api/projects/project', as: :project)
    end
end

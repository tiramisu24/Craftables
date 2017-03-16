export const createProject = (project) => (
  $.ajax({
    type: "POST",
    url: "api/projects",
    data: project
  })
);

export const deleteProject = (projectId) => (
  $.ajax({
    type: "DELETE",
    url: `api/projects/${projectId}`,
  })
);

export const updateProject = (project) => (
  $.ajax({
    type: "UPDATE",
    url: `api/projects/${project.id}`,
    data: project
  })
);

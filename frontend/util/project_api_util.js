export const createProject = (project) => (
  $.ajax({
    type: "POST",
    url: "api/projects",
    data: project
  })
);

export const showProject = (id) => (
  $.ajax({
    type: "GET",
    url: `api/projects/${id}`
  })
)

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

export const getProjects = () => (
  $.ajax({
    type: "GET",
    url: "api/projects"
  })
)

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
    type: "PATCH",
    url: `api/projects/${project.id}`,
    data: {project}
  })
);

export const newStep = (step) => (
  $.ajax({
    type: "POST",
    url: "api/steps",
    data: step
  })
)

export const updateStep = (step) => {
  // debugger;
  $.ajax({
    type: "PATCH",
    url: `api/steps/${step.id}`,
    data: {step}
  })
}

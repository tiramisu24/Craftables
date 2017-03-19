export const newComment = (comment) => (
  $.ajax({
    type: "POST",
    url: `api/comments`,
    data: {comment}
  })
)

export const getAllComments = (projectId) => (
  $.ajax({
    type: "GET",
    url: "api/comments",
    data: {project_id: projectId}
  })
)

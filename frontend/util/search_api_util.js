export const getProjects = (keyword) => (
  $.ajax({
    type: "GET",
    url: "api/keywords",
    data: {keyword}
  })
)

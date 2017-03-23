export const login = (user) => (
  $.ajax({
    type: "POST",
    url: "api/session",
    data: user
  })
);

export const logout = () => (
  $.ajax({
    type: "DELETE",
    url: "api/session"
  })
);

export const signup = (user) => {
  return $.ajax({
    type: "POST",
    url: "api/users",
    data: user
  })
};

export const getUser = (userId) => {
  return $.ajax({
    type: "GET",
    url: `api/users/${userId}`,
    data: {id: userId}
  })
};


export const changeInfo = (user) => (
  $.ajax({
    type:"PATCH",
    url: `api/users/${user.id}`,
    data: {user}
  })
)

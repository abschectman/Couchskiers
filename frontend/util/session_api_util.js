export const signUp = (user) => {
  return $.ajax({
    method: "POST",
    url: "api/users",
    data: { user }
  })
}

export const signIn = (user) => {
  return $.ajax({
    method: "POST",
    url: "api/session",
    data: { user }
  })
}

export const signOut = () => {
  return $.ajax({
    method: "DELETE",
    url: "api/session"
  })
}

export const remove = (user) => {
  return $.ajax({
    method: "DELETE",
    url: "api/users",
    data: {user}
  })
}

export const userShow = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/users/${id}`,
    data: id
  })
}

export const patchUser = (user, id) => {
  return $.ajax({
    method: "PATCH",
    url: `api/users/${id}`,
    data: user,
    contentType: false,
    processData: false
  })
}

export const findUsers = (loactionId) => {
  return $.ajax({
    method: "GET",
    url: `/api/users`
  })
}

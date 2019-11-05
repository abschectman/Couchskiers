import {userShow, patchUser, findUsers} from "../util/session_api_util"

export const SHOW_USER = "SHOW_USER"
export const EDIT_USER = "EDIT_USER"
export const GET_USERS = "GET_USERS"

const showUser = (user) => {
  return {
    type: SHOW_USER,
    user: user,
    location: user.location,
    references: user.reference_list,
    referers: user.referers
  };
}

const getsUsers = (users) => {
  return ({
    type: GET_USERS,
    users: users
  })
}

const editUser = (user) => {
  return ({
    type: EDIT_USER,
    user: user
  })
}


export const getUser = (id) => (dispatch) => {
  userShow(id).then(user => {
    dispatch(showUser(user))
  })
}

export const changeUser = (user, id) => (dispatch) => {
  return patchUser(user, id).then(user => {
    dispatch(editUser(user))
  })
}

export const getLocationUsers = (locationId) => dispatch => {
  return  findUsers(locationId).then(users => {
    dispatch(getsUsers(users))
  })

};
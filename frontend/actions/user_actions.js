import {userShow, patchUser} from "../util/session_api_util"

export const SHOW_USER = "SHOW_USER"
export const EDIT_USER = "EDIT_USER"

const showUser = (user) => {
  return({
    type: SHOW_USER,
    user: user
  })
}

const editUser = (user) => {
  return ({
    type: EDIT_USER,
    user: user
  })
}


export const getUser = (user) => (dispatch) => {
  userShow(user).then(user => {
    dispatch(showUser(user))
  })
}

export const changeUser = (user) => (dispatch) => {
  return patchUser(user).then(user => {
    dispatch(editUser(user))
  })
}
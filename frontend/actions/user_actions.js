import {userShow} from "../util/session_api_util"

export const SHOW_USER = "SHOW_USER"


const showUser = (user) => {
  return({
    type: SHOW_USER,
    user: user
  })
}


export const getUser = (user) => (dispatch) => {
  userShow(user).then(user => {
    dispatch(showUser(user))
  })
}

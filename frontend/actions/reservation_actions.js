import {postRes, getRes} from "../util/reservation_api_util"

export const MAKE_RESERVATION = "MAKE_RESERVATION"
export const GET_MESSAGES = "GET_MESSAGES"
const submitRes = (res) => {
  return({
    type: MAKE_RESERVATION,
    res: res
  })
}

const recieveMessages = (stuff) =>{
  return({
    type: GET_MESSAGES,
    res: stuff.res,
    messages: stuff.messages
  })
}

export const createRes = (res) => (dispatch) =>{
  return postRes(res).then(res => dispatch(submitRes(res)))
}

export const getMessages = (id) => (dispatch) => {
  return getRes(id).then(res => dispatch(recieveMessages(res)))
}
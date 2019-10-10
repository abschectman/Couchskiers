import {postRes} from "../util/reservation_api_util"

export const MAKE_RESERVATION = "MAKE_RESERVATION"

const submitRes = (res) => {
  return({
    type: MAKE_RESERVATION,
    res: res
  })
}

export const createRes = (res) => (dispatch) =>{
  return postRes(res).then(res => dispatch(submitRes(res)))
}
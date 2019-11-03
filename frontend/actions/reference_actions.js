import { postRef } from "../util/reference_api_util";
import { receiveErrors } from "./session_actions";
export const MAKE_REF = "MAKE_REF";

const submitRef = ref => {
  return {
    type: MAKE_REF,
    res: ref
  };
};

export const createRef = ref => dispatch => {

  return postRef(ref).then(ref => dispatch(submitRef(ref)),
   err => dispatch(receiveErrors(err)));
};

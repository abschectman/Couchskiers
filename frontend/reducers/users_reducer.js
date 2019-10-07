import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, REMOVE_USER, RECEIVE_SESSION_ERRORS} from "../actions/session_actions";
import { SHOW_USER, EDIT_USER } from "../actions/user_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER: {
      let newState = state;
      if (action.user instanceof Array) {
        newState = { errors: action.user };
        return Object.assign({}, newState, action.user);
      }
      let id = action.user.id;
      return Object.assign({}, newState, { [id]: action.user });
    }
    case REMOVE_USER: {
      let newState = state;
      delete state[action.user.id];
      return newState;
    }

    case EDIT_USER:{
      let newState = state;
      let id = action.user.id;
     return Object.assign({}, newState, { [id]: action.user})
    }
    case SHOW_USER:{
      let newState = state;
      let id = action.user.id;
     return Object.assign({}, newState, { [id]: action.user})
    }
    default:
      return state;
  }
}

export default usersReducer;
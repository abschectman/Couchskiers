import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, REMOVE_USER, RECEIVE_SESSION_ERRORS} from "../actions/session_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER: {
      let newState = state;
      if (action.user instanceof Array) {
        newState = { errors: action.user };
      }
      return Object.assign({}, newState, action.user);
    }
    case REMOVE_USER: {
      let newState = state;
      delete state[action.user.id];
      return newState;
    }
    default:
      return state;
  }
}

export default usersReducer;
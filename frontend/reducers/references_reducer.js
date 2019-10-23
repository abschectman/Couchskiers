import {
  SHOW_USER
} from "../actions/user_actions";

const referencesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SHOW_USER: {
      let newState = state;
      return Object.assign({}, newState, action.references);
    }
    default:
      return state;
  }
};

export default referencesReducer;

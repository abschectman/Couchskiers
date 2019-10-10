import {
  RECEIVE_CURRENT_LOCATION, RECEIVE_LOCATIONS
} from "../actions/location_actions";
import {SHOW_USER} from "../actions/user_actions"

const locationsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_LOCATION: {
      return action.currentLocation;
    }

    case SHOW_USER: {
      let newState = state;
      return Object.assign({}, newState, action.location);
    }

    default:
      return state;
  }
};

export default locationsReducer;

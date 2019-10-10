import {
  RECEIVE_LOCATIONS
} from "../actions/location_actions";

const uiReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LOCATIONS: {
      return {locations: action.locations}
    }
    default:
      return state;
  }
};

export default uiReducer;

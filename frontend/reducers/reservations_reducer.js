import {
  RECEIVE_CURRENT_LOCATION,
  RECEIVE_LOCATIONS
} from "../actions/location_actions";

const reservationsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_LOCATION: {
      return action.requests;
    }
    default:
      return state;
  }
};

export default reservationsReducer;

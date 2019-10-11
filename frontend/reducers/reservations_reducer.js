import {
  RECEIVE_CURRENT_LOCATION,
  RECEIVE_LOCATIONS
} from "../actions/location_actions";

const reservationsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_LOCATION: {
      let newState = state;
      return Object.assign({}, newState, action.requests);
    }
    default:
      return state;
  }
};

export default reservationsReducer;

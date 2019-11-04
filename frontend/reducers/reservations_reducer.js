import {
  RECEIVE_CURRENT_LOCATION,
  RECEIVE_LOCATIONS
} from "../actions/location_actions";
import {GET_MESSAGES} from "../actions/reservation_actions"

const reservationsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_LOCATION: {
      let newState = state;
      return Object.assign({}, newState, action.requests);
    }
    case GET_MESSAGES: {
      let newState = state;
      return Object.assign({}, newState, action.res);
    }
    default:
      return state;
  }
};

export default reservationsReducer;

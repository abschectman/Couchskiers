
import { GET_MESSAGES } from "../actions/reservation_actions";

const messagesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case GET_MESSAGES: {
      let newState = state;
      return Object.assign({}, newState, action.messages);
    }
    default:
      return state;
  }
};

export default messagesReducer;

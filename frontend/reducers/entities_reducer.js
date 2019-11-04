import { combineReducers } from "redux";
import locationsReducer from "../reducers/locations_reducer"
import usersReducer from "./users_reducer";
import reservationsReducer from "./reservations_reducer"
import messagesReducer from "./messages_reducer"
import sessionReducer from "./session_reducer";
import referencesReducer from "./references_reducer";
import referersReducer from "./referers_reducer"
const entitiesReducer = combineReducers({
  users: usersReducer,
  locations: locationsReducer,
  reservations: reservationsReducer,
  references: referencesReducer,
  referers: referersReducer,
  messages: messagesReducer
});

export default entitiesReducer;

import { combineReducers } from "redux";
import locationsReducer from "../reducers/locations_reducer"
import usersReducer from "./users_reducer";
import sessionReducer from "./session_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  locations: locationsReducer
});

export default entitiesReducer;

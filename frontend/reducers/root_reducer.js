import { combineReducers } from "redux";
import ui from "./ui_reducer";
import entities from "./entities_reducer";
import session from "./session_reducer";
import users from "./users_reducer"
import errors from "./errors_reducer";
import modal from "./modal_reducer";

const rootReducer = combineReducers({
  entities,
  session,
  errors,
  modal,
  ui
});

export default rootReducer;

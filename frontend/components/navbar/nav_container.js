import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { getUser } from "../../actions/user_actions";
import {
  findLocations,
  clearLocations
} from "../../actions/location_actions";
import Nav from "./nav";

const msp = (state) => {
  return {
    currentUser: state.session.currentUser,
    locations: state.ui.locations,
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    findLocations: string => dispatch(findLocations(string)),
    clearLocations: () => dispatch(clearLocations())
  };
};

export default connect(
  msp,
  mdp
)(Nav);

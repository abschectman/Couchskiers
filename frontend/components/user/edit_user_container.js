import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { getUser, changeUser } from "../../actions/user_actions";
import {
  findLocations,
  clearLocations,
  findLocation
} from "../../actions/location_actions";
import Edit from "./edit";

const msp = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    locations: state.entities.locations,
    errors: state.errors,
    currentLocation: state.entities.locations,
    userId: ownProps.match.params.userId,
    users: state.entities.users
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    findLocations: string => dispatch(findLocations(string)),
    clearLocations: () => dispatch(clearLocations()),
    findLocation: id => dispatch(findLocation(id)),
    getUser: id => dispatch(getUser(id)),
    changeUser: user => dispatch(changeUser(user))
  };
};

export default connect(
  msp,
  mdp
)(Edit);

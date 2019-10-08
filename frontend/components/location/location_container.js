import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { getUser } from "../../actions/user_actions";
import {
  findLocation
} from "../../actions/location_actions";
import Location from "./location";

const msp = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    locations: state.entities.locations,
    locationId: ownProps.match.params.locationId,
    users: state.entities.users
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    findLocation: id => dispatch(findLocation(id)),
    getUser: id => dispatch(getUser(id))
  };
};

export default connect(
  msp,
  mdp
)(Location);
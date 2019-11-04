import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { getUser, getLocationUsers } from "../../actions/user_actions";
import {
  findLocation
} from "../../actions/location_actions";
import Location from "./location";

const msp = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    location: state.entities.locations[ownProps.match.params.locationId],
    locationId: ownProps.match.params.locationId,
    users: state.entities.users,
    requesters: state.entities.reservations
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    findLocation: id => dispatch(findLocation(id)),
    getUser: id => dispatch(getUser(id)),
    getLocationUsers: location_id => dispatch(getLocationUsers(location_id))
  };
};

export default connect(
  msp,
  mdp
)(Location);

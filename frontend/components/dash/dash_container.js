import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import {getUser} from "../../actions/user_actions"
import {findLocations, clearLocations, findLocation} from "../../actions/location_actions"
import Dash from "./dash";

const msp = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    locations: state.entities.locations,
    errors: state.errors,
    currentLocation: state.entities.locations,
    userId: ownProps.match.params.userId
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    findLocations: string => dispatch(findLocations(string)),
    clearLocations: () => dispatch(clearLocations()),
    findLocation: id => dispatch(findLocation(id)),
    getUser: id => dispatch(getUser(id))
  };
};

export default connect(
  msp,
  mdp
)(Dash);







// import {connect} from "react-router-dom";
// import { logout } from "../../actions/session_actions"
// import Dash from "./dash"
// const msp = (state) => {
//   return{
//     state
//   }
// }

// const mdp = (dispatch) => {
//   return {
//     logout: () => dispatch(logout())
//   }
// }

// connect (msp, mdp)(Dash)
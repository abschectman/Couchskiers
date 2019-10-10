import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import {getUser} from "../../actions/user_actions"
import {findLocations, clearLocations, findLocation} from "../../actions/location_actions"
import Dash from "./dash";

const msp = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors,
    locations: state.entities.locations,
    userId: ownProps.match.params.userId,
    users: state.entities.users,
    test: state.entities.users[ownProps.match.params.userId].location_id
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
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
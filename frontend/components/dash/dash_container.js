import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import {getUser} from "../../actions/user_actions";
import {createRes} from "../../actions/reservation_actions"
import {findLocations, clearLocations, findLocation} from "../../actions/location_actions"
import Dash from "./dash";

const msp = (state, ownProps) => {
  let ob = {
    currentUser: state.session.currentUser,
    errors: state.errors,
    locations: state.entities.locations,
    userId: ownProps.match.params.userId,
    users: state.entities.users
  }; 
  if (state.entities.users[ownProps.match.params.userId]){
    ob["test"] = state.entities.users[ownProps.match.params.userId].location_id;
  }
  return ob;
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    createRes: (res) => dispatch(createRes(res)),
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
import { connect } from "react-redux";
import { getMessages } from "../../actions/reservation_actions";
import {getUser} from "../../actions/user_actions"
import ReservationComponent from "./reservation_component"

const msp = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    messages: state.entities.messages
  };
};

const mdp = dispatch => {
  return {
    getMessages: res => dispatch(getMessages(res)),
    getUser: id => dispatch(getUser(id))
  };
};

export default connect(
  msp,
  mdp
)(ReservationComponent);

import { connect } from "react-redux";
import { getMessages } from "../../actions/reservation_actions";
import ReservationComponent from "./reservation_component"

const msp = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    // reservationId: ownProps.match.params.reservationId,
    messages: state.entities.messages
  };
};

const mdp = dispatch => {
  return {
    getMessages: res => dispatch(getMessages(res))
  };
};

export default connect(
  msp,
  mdp
)(ReservationComponent);

import { openModal, closeModal } from "../../actions/modal_actions";
import SignupNav from "./signup_nav";
import { connect } from "react-redux";

const msp = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const mdp = dispatch => {
  return {
    closeModal: modal => dispatch(closeModal(modal)),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(
  msp,
  mdp
)(SignupNav);
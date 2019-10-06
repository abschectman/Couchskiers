import { closeModal } from "../../actions/modal_actions";
import {connect} from "react-redux"
import Modal from "./modal"
import { login } from "../../actions/session_actions";
const msp = state => {
  return {
    errors: state.errors,
    modal: state.modal
  };
};

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    login: (user) => dispatch(login(user))
  };
};

export default connect(msp, mdp)(Modal)
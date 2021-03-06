import {connect} from "react-redux";
import {createUser, login} from "../../actions/session_actions";
import {getUser} from "../../actions/user_actions"
import {findLocations, clearLocations} from "../../actions/location_actions"
import SignupForm from "./signup_form"
import {openModal, closeModal} from "../../actions/modal_actions"
const msp = ( state ) => {
  return {
    currentUser: state.session.currentUser,
    users: state.entities.users,
    errors: state.errors,
    locations: state.ui.locations
  };
};

const mdp = (dispatch) =>{
  return {
    closeModal: (modal) => dispatch(closeModal(modal)),
    openModal: (modal) => dispatch(openModal(modal)),
    create: (user) => dispatch(createUser(user)),
    login: (user) => dispatch(login(user)),
    findLocations: (string) => dispatch(findLocations(string)),
    clearLocations: () => dispatch(clearLocations())

  }
}

export default connect(msp, mdp)(SignupForm)
import {createRef} from "../../actions/reference_actions"
import {getUser} from "../../actions/user_actions"
import {connect} from "react-redux"
import Ref from "./ref"

const msp = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    userId: ownProps.match.params.userId,
    users: state.entities.users,
    errors: state.errors
  };
};

const mdp = dispatch => {
  return {
    createRef: ref => dispatch(createRef(ref)),
    getUser: id => dispatch(getUser(id))
  };
};

export default connect(
  msp,
  mdp
)(Ref);
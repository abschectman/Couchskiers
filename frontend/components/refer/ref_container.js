import {postRef} from "../../util/reference_api_util"
import {getUser} from "../../util/session_api_util"
import {connect} from "react-redux"
import Ref from "./ref"

const msp = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    userId: ownProps.match.params.userId,
    users: state.entities.users
  };
};

const mdp = dispatch => {
  return {
    createRef: ref => dispatch(postRef(ref)),
    getUser: id => dispatch(getUser(id))
  };
};

export default connect(
  msp,
  mdp
)(Ref);
import {signIn, signUp, signOut, remove} from "../util/session_api_util"


export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"
export const REMOVE_USER = "REMOVE_USER"
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";


const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user: user.user,
    location: user.location,
    references: user.reference_list,
    referers: user.referers
  };
}
const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors: errors.responseJSON
});

const eraseUser = (user) => {
  return {
    type: REMOVE_USER,
    user
  };
};


export const createUser = (user) => (dispatch) => {
  return signUp(user).then(user => {
    dispatch(receiveCurrentUser(user))
  }, error => (dispatch(receiveErrors(error))))
}

export const deleteUser = (user) => (dispatch) => {
  remove(user).then(user => {
    dispatch(eraseUser(user))
  })
}

export const login = (user) => (dispatch) => {
  return signIn(user).then(
    
    user => {
      dispatch(receiveCurrentUser(user));
    },
    error => dispatch(receiveErrors(error))
  );
}

export const logout = () => (dispatch) => {
  signOut().then( () => {
    dispatch(logoutCurrentUser())
  })
}



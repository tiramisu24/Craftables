import * as APIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
})

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
})

export const clearErrors = () => ({
  type: CLEAR_ERRORS
})

export const login = (user) => dispatch => {
  return APIUtil
          .login(user)
          .then((loggedInUser) =>  dispatch(receiveCurrentUser(loggedInUser)))
          .fail(errors  => dispatch(receiveErrors(errors.responseJSON)))
}


export const signup = (user) => dispatch => {
  return APIUtil
           .signup(user)
           .then((newUser) => dispatch(receiveCurrentUser(newUser)))
           .fail(errors =>{
            dispatch(receiveErrors(errors.responseJSON))})
}

export const logout = () => dispatch => {
  return APIUtil.logout()
                .then(loggedOutUser => dispatch(receiveCurrentUser(null)))
                .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
}

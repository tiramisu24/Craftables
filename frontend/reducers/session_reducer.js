import {RECEIVE_CURRENT_USER, RECEIVE_USER} from '../actions/session_actions';

import merge from 'lodash/merge';

const SessionReducer = (state = null, action) => {
  let newState = merge({}, state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      newState.currentUser = action.user;

      if(action.user){
        localStorage.setItem("user", action.user.username);
        localStorage.setItem("id", action.user.id)
      } else {
        localStorage.clear();
      }
      return newState;
    case RECEIVE_USER:
      newState.user = action.user
      return newState;
    default:
      return newState;
  }
}

export default SessionReducer;

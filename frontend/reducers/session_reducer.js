import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import merge from 'lodash/merge';

const SessionReducer = (state = null, action) => {
  let newState = merge({}, state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      newState.currentUser = action.user;
      newState.errors = [];
      if(action.user){
        localStorage.setItem("user", action.user.username);
      } else {
        localStorage.setItem("user", "");
      }
      return newState;
    default:
      return newState;
  }
}

export default SessionReducer;

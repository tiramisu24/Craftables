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
        localStorage.setItem("author_id", action.user.id)
      } else {
        localStorage.setItem("user", "");
        localStorage.setItem("author_id", "")
      }
      return newState;
    default:
      return newState;
  }
}

export default SessionReducer;

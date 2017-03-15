import {RECEIVE_CURRENT_USER, RECEIVE_ERRORS} from '../actions/session_actions';
import merge from 'lodash/merge';


const initialState = {
  currentUser: null,
  errors: [],
  project: {comments:{}},
  search: {}
};

const SessionReducer = (state = initialState, action) => {
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
    case RECEIVE_ERRORS:
      newState.errors = action.errors;
      return newState;
    default:
      return newState;
  }
}

export default SessionReducer;

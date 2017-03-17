import {RECEIVE_ERRORS, CLEAR_ERRORS} from '../actions/errors_action';
import merge from 'lodash/merge';


const ErrorsReducer = (state = [], action) => {
  let newErrors = merge([], state);
  switch(action.type){
    case RECEIVE_ERRORS:
      newErrors= action.errors;
      localStorage.setItem("user", "");
      return newErrors;
    case CLEAR_ERRORS:
      newErrors.errors = [];
      return newErrors;
    default:
      return newErrors;
  }
}

export default ErrorsReducer;

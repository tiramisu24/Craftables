import {RECEIVE_ERRORS, CLEAR_ERRORS} from '../actions/errors_action';
import merge from 'lodash/merge';


const ErrorsReducer = (state = [], action) => {
  let newErrors = [].concat(state);
  switch(action.type){
    case RECEIVE_ERRORS:
      newErrors= action.errors;
      return newErrors;
    case CLEAR_ERRORS:
      newErrors = [];
      return newErrors;
    default:
      return newErrors;
  }
}

export default ErrorsReducer;

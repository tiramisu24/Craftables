import {RECEIVE_PROJECT, RECEIVE_ERRORS} from '../actions/project_actions';
import merge from 'lodash/merge';


const ProjectReducer = (state, action) => {
  let newState = merge({}, state)
  switch(action.type){
    case RECEIVE_PROJECT:
      debugger;
      let newProject = merge({}, newState.project, action.project);
      newState.project = newProject;
      return newState;
    case RECEIVE_ERRORS:
      newState.errors = action.errors;
      return newState;
    default:
      return newState;
  }

}

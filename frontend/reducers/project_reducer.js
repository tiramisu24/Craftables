import {RECEIVE_PROJECT, RECEIVE_ERRORS, RECEIVE_CURRENT_PROJECTS} from '../actions/project_actions';
import merge from 'lodash/merge';


const ProjectReducer = (state, action) => {
  let newState = merge({}, state)
  switch(action.type){
    case RECEIVE_CURRENT_PROJECTS:
      newState.project = action;
      return newState;
    case RECEIVE_PROJECT:
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

export default ProjectReducer;

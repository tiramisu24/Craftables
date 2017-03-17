import {RECEIVE_PROJECT, RECEIVE_CURRENT_PROJECT, RECEIVE_ERRORS, RECEIVE_PROJECTS, DELETE_PROJECT, RECEIVE_STEPS} from '../actions/project_actions';
import merge from 'lodash/merge';


const ProjectReducer = (state, action) => {
  let newState = merge({}, state)
  switch(action.type){
    case RECEIVE_PROJECTS:
      newState.project = action.projects;
      debugger;
      newState.errors = [];
      return newState;
    case RECEIVE_PROJECT:
      newState = merge(newState, {[action.project.id]:action.project});
      newState.errors = [];
      return newState;
    case RECEIVE_CURRENT_PROJECT:
      newState = action.project;
      newState.errors =[];
      debugger;
      return newState;
    case RECEIVE_ERRORS:
      newState.errors = action.errors;
      return newState;
    case DELETE_PROJECT:
      newState.project[action.id] = null
      return newState;
    case RECEIVE_STEPS:
      newState.steps = action.steps;
      newState.errors = [];
      return newState;
    default:
      return newState;
  }

}

export default ProjectReducer;

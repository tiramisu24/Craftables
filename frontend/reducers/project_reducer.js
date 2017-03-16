import {RECEIVE_PROJECT, RECEIVE_ERRORS, RECEIVE_PROJECTS, DELETE_PROJECT} from '../actions/project_actions';
import merge from 'lodash/merge';


const ProjectReducer = (state, action) => {
  let newState = merge({}, state)
  switch(action.type){
    case RECEIVE_PROJECTS:
      newState.project = action.projects;
      return newState;
    case RECEIVE_PROJECT:
      newState = merge(newState, {[action.project.id]:action.project});
      return newState;
    case RECEIVE_ERRORS:
      newState.errors = action.errors;
      return newState;
    case DELETE_PROJECT:
      newState.project[action.id] = null
      return newState;
    default:
      return newState;
  }

}

export default ProjectReducer;

import { RECEIVE_PROJECTS,
         RECEIVE_PROJECT,
         RECEIVE_CURRENT_PROJECT,
         RECEIVE_ERRORS,
         DELETE_PROJECT,
         RECEIVE_STEPS
       } from '../actions/project_actions';
import merge from 'lodash/merge';

const initialState = {
  currentUser: null,
  errors: [],
  projects: {},
  steps: {},
  search: {}
};

const ProjectReducer = (state=initialState, action) => {
  let newState = merge({}, state);
  newState.errors = [];

  switch(action.type){
    case RECEIVE_PROJECTS:
      newState.projects = action.projects;
      return newState;
    case RECEIVE_PROJECT:
      newState.projects = merge(newState.projects, {[action.project.id]: action.project});
      return newState;
    case RECEIVE_CURRENT_PROJECT:
      newState.projects = {[action.project.id]: action.project};
      return newState;
    case RECEIVE_ERRORS:
      newState.errors = action.errors;
      return newState;
    case DELETE_PROJECT:
      newState.projects[action.id] = null
      return newState;
    case RECEIVE_STEPS:
      newState.steps = action.steps;
      return newState;
    default:
      return merge({}, state);
  }

}

export default ProjectReducer;

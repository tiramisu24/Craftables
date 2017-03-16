import * as ProjectAPIUtil from '../util/project_api_util';
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveProject = (project) => ({
  type: RECEIVE_PROJECT,
  project
})

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
})

export const createProject = (project) => dispatch => {

  return ProjectAPIUtil
            .createProject(project)
            .then(newProj => dispatch(receiveProject(newProj)))
            .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
}

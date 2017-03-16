import * as ProjectAPIUtil from '../util/project_api_util';
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveProject = (project) => ({
  type: RECEIVE_PROJECT,
  project
})

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
})



export const createProject = (project) => dispatch => {
  return ProjectAPIUtil
            .createProject(project)
            .then(newProj => dispatch(receiveProject(newProj)))
            .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
}

export const showProject = (id) => dispatch => {
  return ProjectAPIUtil
            .showProject(id)
            .then(project => {
              dispatch(receiveProject(project))})
            .fail(errors => {
              dispatch(receiveErrors(errors.responseJSON))})
}

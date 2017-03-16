import * as ProjectAPIUtil from '../util/project_api_util';
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const DELETE_PROJECT = 'DELETE_PROJECT';
export const RECEIVE_PROJECTS = 'RECEIVE_CURRENT_PROJECTS';

const receiveProject = (project) => ({
  type: RECEIVE_PROJECT,
  project
})

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
})

const deleteProject = (projectId) => ({
  type: DELETE_PROJECT,
  projectId
})

const  recieveProjects = (projects) => ({
  type: RECEIVE_PROJECTS,
  projects
})

export const removeProject = (id) => dispatch => {
  debugger;
  return ProjectAPIUtil
            .deleteProject(id)
            .then(deletedProject => dispatch(receivePoject(null)))
            .fail(errors => dispatch(receiveErrors(errors.reqponseJSON)))
}

export const createProject = (project) => dispatch => {
  return ProjectAPIUtil
            .createProject(project)
            .then(newProj => dispatch(receiveProject(newProj)))
            .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
}

export const showProject = (id) => dispatch => {
  return ProjectAPIUtil
            .showProject(id)
            .then(project =>   dispatch(receiveProject(project)))
            .fail(errors =>   dispatch(receiveErrors(errors.responseJSON)))
}

export const showProjects = () => dispatch => {
  return ProjectAPIUtil
            .getProjects()
            .then(projects =>               dispatch(recieveProjects(projects)))
            .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
}

import * as ProjectAPIUtil from '../util/project_api_util';
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const DELETE_PROJECT = 'DELETE_PROJECT';
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_CURRENT_PROJECT = "RECEIVE_CURRENT_PROJECT";
export const RECEIVE_STEPS = 'RECEIVE_STEPS';

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

const receiveProjects = (projects) => ({
  type: RECEIVE_PROJECTS,
  projects
})

const receiveCurrentProject = project => ({
  type: RECEIVE_CURRENT_PROJECT,
  project
})

const recieveSteps = (steps) => ({
  type: RECEIVE_STEPS,
  steps
})

export const removeProject = (id) => dispatch => {
  return ProjectAPIUtil
            .deleteProject(id)
            .then(deletedProject => dispatch(receivePoject(null)))
            .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
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
            .then(project => dispatch(receiveCurrentProject(project)))
            .fail(errors =>   dispatch(receiveErrors(errors.responseJSON)))
}

export const showProjects = () => dispatch => {
  return ProjectAPIUtil
            .getProjects()
            .then(projects => dispatch(receiveProjects(projects)))
            .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
}

export const getAllSteps = (projectId) => dispatch => {
  return ProjectAPIUtil
            .getSteps(projectId)
            .then(steps => dispatch(receiveSteps(steps)))
            .fail(errors => dispatch(receiveErrors(errors.responseJSON)))

}

export const newStep = (step) => dispatch => {
  return ProjectAPIUtil.newStep(step)
}

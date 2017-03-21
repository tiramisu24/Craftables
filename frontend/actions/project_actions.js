import * as ProjectAPIUtil from '../util/project_api_util';
import {receiveErrors, clearErrors} from './errors_action'
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const DELETE_PROJECT = 'DELETE_PROJECT';
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_CURRENT_PROJECT = "RECEIVE_CURRENT_PROJECT";
export const RECEIVE_STEPS = 'RECEIVE_STEPS';
export const RECEIVE_STEP = 'RECEIVE_STEP';

const receiveProject = (project) => ({
  type: RECEIVE_PROJECT,
  project
})

const deleteCurrentProject = (projectId) => ({
  type: DELETE_PROJECT,
  projectId
})

export const receiveProjects = (projects) => ({
  type: RECEIVE_PROJECTS,
  projects
})

const receiveCurrentProject = project => ({
  type: RECEIVE_CURRENT_PROJECT,
  project
})

const receiveSteps = (steps) => ({
  type: RECEIVE_STEPS,
  steps
})

const receiveStep = (step) => ({
  type: RECEIVE_STEP,
  step
})

export const removeProject = (id) => dispatch => {
  return ProjectAPIUtil
            .deleteProject(id)
            .then(deletedProject => dispatch(deleteCurrentProject(deletedProject.id)))
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
            .then(project => {
              // debugger;
              dispatch(receiveCurrentProject(project))})
            .fail(errors =>   dispatch(receiveErrors(errors.responseJSON)))
}

export const showProjects = () => dispatch => {
  return ProjectAPIUtil
            .getProjects()
            .then(projects => {
              dispatch(receiveProjects(projects.projects))})
            .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
}

export const updateProject = (project) => dispatch => {
  return ProjectAPIUtil
            .updateProject(project)
            .then(project => dispatch(receiveProject(project)))
            .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
}
export const getAllSteps = (projectId) => dispatch => {
  debugger;
  return ProjectAPIUtil
            .getSteps(projectId)
            .then(steps => dispatch(receiveSteps(steps)))
            .fail(errors => dispatch(receiveErrors(errors.responseJSON)))

}
export const newStep = (step) => dispatch => {
  return ProjectAPIUtil.newStep(step)
                       .then(step =>
                        dispatch(receiveStep(step)))
                       .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
}

export const updateStep = (step) => dispatch => {
  return ProjectAPIUtil
            .updateStep(step)
            .then(step => {
              dispatch(receiveProject(step))})
            .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
}

import * as SearchAPIUtil from '../util/search_api_util';
import {RECEIVE_PROJECTS, receiveProjects} from './project_actions'
export const getAPIProjects = () => {
  return console.log("get api projects ");
}

export const tempSendtoState = (projects) => {
  return console.log("will replace with dispatch");
}

export const findProjects = (keyword) => dispatch => {
  return SearchAPIUtil.getProjects(keyword)
                      .then(projects => {
                        dispatch(receiveProjects(projects.projects))})
                      .fail((errors) => (console.log(errors)))
}

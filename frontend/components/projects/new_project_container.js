import {connect} from 'react-redux';
import {createProject, newStep} from '../../actions/project_actions';
import CreateProject from './create_project'

const mapStateToProps =(state) => {
  let projectKeys = Object.keys(state.projects.projects);
  let stepKeys = state.projects.steps;
  return{
  authorId : state.session.currentUser ? state.session.currentUser.id : null,
  projectId: (projectKeys.length > 0)? projectKeys[projectKeys.length-1] : 0,
  stepId: (stepKeys.length > 0)? projectKeys[projectKeys.length -1] : 0
}}

const mapDispatchToProps = (dispatch) => ({
  createProject: (project) => dispatch(createProject(project)),
  newStep: (step) => dispatch(newStep(step))
})

const createProjectContainer = connect(mapStateToProps, mapDispatchToProps)(CreateProject);

export default createProjectContainer;

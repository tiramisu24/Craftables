import {connect} from 'react-redux';
import {createProject, newStep} from '../../actions/project_actions';
import CreateProject from './create_project'

const mapStateToProps =(state, ownProps) => {
  let projectKeys = Object.keys(state.projects.projects);
  return{
  authorId : state.session.currentUser ? state.session.currentUser.id : null
}}

const mapDispatchToProps = (dispatch) => ({
  createProject: (project) => dispatch(createProject(project)),
  newStep: (step) => dispatch(newStep(step))
})

const createProjectContainer = connect(mapStateToProps, mapDispatchToProps)(CreateProject);

export default createProjectContainer;

import {connect} from 'react-redux';
import {showProject,getAllSteps, updateStep, updateProject} from '../../actions/project_actions';
import UpdateProject from './update_project'

const mapStateToProps =(state, ownProps) => {
  // debugger;
  return{
  projectId: ownProps.match.params.id,
  projectsHash : state.projects.projects,
  project: state.projects.projects[ownProps.match.params.id]
}}



const mapDispatchToProps = (dispatch) => ({
  showProject: (id) => dispatch(showProject(id)),
  getAllSteps: (id) => dispatch(getAllSteps(id)),
  updateProject: (project) => dispatch(updateProject(project)),
  updateStep: (step) => dispatch(updateStep(step))
})

const UpdateProjectContainer = connect(mapStateToProps, mapDispatchToProps)(UpdateProject);

export default UpdateProjectContainer;

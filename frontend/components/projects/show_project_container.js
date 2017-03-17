import {connect} from 'react-redux';
import {showProject, removeProject} from '../../actions/project_actions';
import ShowProject from './show_project'

const mapStateToProps =(state, ownProps) => {
  debugger;
  return{
  project : state.project
}}


const mapDispatchToProps = (dispatch) => ({
  showProject: (id) => dispatch(showProject(id)),
  removeProject: (id) => dispatch(removeProject(id))
})

const ShowProjectContainer = connect(mapStateToProps, mapDispatchToProps)(ShowProject);

export default ShowProjectContainer;

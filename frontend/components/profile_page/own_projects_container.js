import {connect} from 'react-redux';
import {showMyProjects} from '../../actions/project_actions';
import OwnProjects from './own_project_list'

const mapStateToProps =(state, ownProps) => {
  return{
  projectsHash : state.projects.projects
}}


const mapDispatchToProps = (dispatch) => ({
  showMyProjects: () => dispatch(showMyProjects())
})

const showOwnProjects = connect(mapStateToProps, mapDispatchToProps)(OwnProjects);

export default showOwnProjects;

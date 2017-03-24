import {connect} from 'react-redux';
import {showProjects} from '../../actions/project_actions';
import FeaturedProjects from './featured_projects'

const mapStateToProps =(state, ownProps) => {
  return{
  projectsHash : state.projects.projects
}}


const mapDispatchToProps = (dispatch) => ({
  showProjects: () => dispatch(showProjects())
})

const FeaturedProjectsContainer = connect(mapStateToProps, mapDispatchToProps)(FeaturedProjects);

export default FeaturedProjectsContainer;

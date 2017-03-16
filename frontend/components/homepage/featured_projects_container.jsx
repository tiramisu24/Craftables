import {connect} from 'react-redux';
import {showProjects} from '../../actions/project_actions';
import FeaturedProjects from './featured_projects'

const mapStateToProps =(state, ownProps) => {
  debugger;
  return{
  project : state.project
}}


const mapDispatchToProps = (dispatch) => ({
  showProjects: () => dispatch(showProjects())
})

const showFeaturedProjects = connect(mapStateToProps, mapDispatchToProps)(FeaturedProjects);

export default showFeaturedProjects;

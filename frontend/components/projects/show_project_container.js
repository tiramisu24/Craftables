import {connect} from 'react-redux';
import {showProject} from '../../actions/project_actions';
import ShowProject from './show_project'



const mapDispatchToProps = (dispatch) => ({
  showProject: (project) => dispatch(showProject(project))
})

const ShowProjectContainer = connect(null, mapDispatchToProps)(ShowProject);

export default ShowProjectContainer;

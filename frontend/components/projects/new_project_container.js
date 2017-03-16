import {connect} from 'react-redux';
import {createProject} from '../../actions/project_actions';
import CreateProject from './create_project'

const mapStateToProps =(state) => ({
  authorId : state.session.currentUser ? state.session.currentUser.id : null
})

const mapDispatchToProps = (dispatch) => ({
  createProject: (project) => dispatch(createProject(project))
})

const createProjectContainer = connect(mapStateToProps, mapDispatchToProps)(CreateProject);

export default createProjectContainer;

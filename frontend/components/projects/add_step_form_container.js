import {connect} from 'react-redux';
import {newStep} from '../../actions/project_actions';
import NewStep from './new_step'

const mapStateToProps =(state, ownProps) => ({
  project : state.project,
  projectId: ownProps.id
})


const mapDispatchToProps = (dispatch) => ({
  newStep: (step) => dispatch(newStep(step))
})

const NewStepContainer = connect(mapStateToProps, mapDispatchToProps)(NewStep);

export default NewStepContainer;

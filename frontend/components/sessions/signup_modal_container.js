import {connect} from 'react-redux';
import {signup} from '../../actions/session_actions';
import SignUPModal from './session_form';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: !!state.currentUser,
  currentUser: state.currentUser,
  errors: session.errors
})

const mapDispatchToProps = (dispatch) => (
    processForm: user => dispatch(signup(user))
);

const SignUPModalContainer = connect(mapStateToProps, mapDispatchToProps)(SignUPModal);

export default SignUPModalContainer;

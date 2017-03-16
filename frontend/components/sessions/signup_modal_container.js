import {connect} from 'react-redux';
import {signup, clearErrors, login} from '../../actions/session_actions';
import SignUPModal from './signup_modal';

const mapStateToProps = ({session}) => ({
  loggedIn: !!session.currentUser,
  currentUser: session.currentUser,
  errors: session.errors
})

const mapDispatchToProps = (dispatch) => ({
  clearErrors: () => dispatch(clearErrors()),
  processForm: user => dispatch(signup(user)),
  demo: user => dispatch(login(user))
});

const SignUPModalContainer = connect(mapStateToProps, mapDispatchToProps)(SignUPModal);

export default SignUPModalContainer;

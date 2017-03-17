import {connect} from 'react-redux';
import {signup, login} from '../../actions/session_actions';
import {clearErrors} from '../../actions/errors_action';
import SignUPModal from './signup_modal';

const mapStateToProps = ({session, errors}) => ({
  loggedIn: !!session.currentUser,
  currentUser: session.currentUser,
  errors: errors
})

const mapDispatchToProps = (dispatch) => ({
  clearErrors: () => dispatch(clearErrors()),
  processForm: user => dispatch(signup(user)),
  demo: user => dispatch(login(user))
});

const SignUPModalContainer = connect(mapStateToProps, mapDispatchToProps)(SignUPModal);

export default SignUPModalContainer;

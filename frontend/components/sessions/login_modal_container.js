import {connect} from 'react-redux';
import {login} from '../../actions/session_actions';
import {clearErrors} from '../../actions/errors_action';
import LoginModal from './login_modal';

const mapStateToProps = ({session,errors}) => ({
  loggedIn: !!session.currentUser,
  currentUser: session.currentUser,
  errors: errors
})

const mapDispatchToProps = (dispatch) => ({
  clearErrors: () => dispatch(clearErrors()),
  processForm: user => dispatch(login(user))
});

const LoginModalContainer = connect(mapStateToProps, mapDispatchToProps)(LoginModal);

export default LoginModalContainer;

import {connect} from 'react-redux';
import {signup} from '../../actions/session_actions';
import SignUPModal from './signup_modal';

const mapStateToProps = ({session}) => ({
  loggedIn: !!session.currentUser,
  currentUser: session.currentUser,
  errors: session.errors
})

const mapDispatchToProps = (dispatch) => ({
  processForm: user => dispatch(signup(user))
});

const SignUPModalContainer = connect(mapStateToProps, mapDispatchToProps)(SignUPModal);

export default SignUPModalContainer;

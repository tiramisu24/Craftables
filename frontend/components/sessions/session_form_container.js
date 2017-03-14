import {connect} from 'react-redux';
import {signup, login, logout} from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: !!state.currentUser,
  currentUser: state.currentUser,
  formType : (ownProps.location.pathname.includes('session')) ? "login" : "signup"
})

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = (location.pathname.includes('session') ? 'Log In' : 'Sign Up');
  const processForm = (formType === 'Log In' ? login : signup );

  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

const SessionFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionForm);

export default SessionFormContainer;

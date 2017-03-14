import {connect} from 'react-redux';
import {signup, login, logout} from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: !!state.currentUser,
  currentUser: state.currentUser
})

const mapDispatchToProps = (dispatch, ownProps) => {
  let formType = (ownProps.location.pathname.includes('session')) ? "login" : "signup";

  return {
    processForm: (currentUser) => dipatch => (formType === "login")
                               ? dispatch(login(currentUser))
                               : dispatch(signup(currentUser))
  }
}

const SessionFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionForm);

export default SessionFormContainer;

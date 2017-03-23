import {connect} from 'react-redux';
import {changeInfo, getUser} from '../../actions/session_actions';
import ProfilePage from './profile_page'

const mapStateToProps =(state, ownProps) => {
  // debugge r;
  return{
  user : state.session.user
}}


const mapDispatchToProps = (dispatch) => ({
  getUser: (userId) => dispatch(getUser(userId)),
  changeInfo: (user) => dispatch(changeInfo(user))
})

const ProfilePageContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePage);

export default ProfilePageContainer;

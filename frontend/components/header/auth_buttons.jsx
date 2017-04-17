import React from 'react';
import SignUPModalContainer from '../sessions/signup_modal_container';
import LoginModalContainer from '../sessions/login_modal_container';
import UserDropdownContainer from '../users/user_dropdown_container';

const AuthButtons = () => (
   <div className="auth-modals">
    <LoginModalContainer/>
    <SignUPModalContainer/>
    <UserDropdownContainer/>
  </div>
)
export default AuthButtons;

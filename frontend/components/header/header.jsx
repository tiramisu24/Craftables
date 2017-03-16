import React from 'react';
import AuthButtons from './auth_buttons';

const Header = () => (
  <div className="header">
    <div className="logo"><h4>Craftables</h4></div>
    <div>SearchBar</div>
    <AuthButtons/>
  </div>
)

export default Header;

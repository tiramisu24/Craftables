import React from 'react';
import AuthButtons from './auth_buttons';
import {Link} from 'react-router-dom';

const Header = () => (
  <div className="header">
    <Link to ="/homepage" className="logo"><h4>Craftables</h4></Link>
    <div>SearchBar</div>
    <AuthButtons/>
  </div>
)

export default Header;

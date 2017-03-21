import React from 'react';
import AuthButtons from './auth_buttons';
import {Link} from 'react-router-dom';
import SearchBarContainer from '../search/search_bar_container';

const Header = () => (
  <div className="header">
    <Link to ="/homepage" className="logo"><h4>Craftables</h4></Link>
    <SearchBarContainer/>
    <AuthButtons/>
  </div>
)

export default Header;

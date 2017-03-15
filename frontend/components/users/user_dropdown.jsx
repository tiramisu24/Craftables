import React from 'react';
import {Link} from 'react-router';
class UserDropdown extends React.Component {
  constructor(props){
    super(props)
    this.handleClick=this.handleClick.bind(this);
  }


  handleClick(e){
    e.preventDefault();
    this.props.logout().then(localStorage.setItem("user", ""));;
  }

  render(){
    if(localStorage.user === ""){

      return <div></div>;
    }
    return(
      <div className="profile-form">
        <div>Profile</div>
        <button onClick={this.handleClick} className="logout-button">Log Out</button>
      </div>
    )
  }
}

export default UserDropdown;

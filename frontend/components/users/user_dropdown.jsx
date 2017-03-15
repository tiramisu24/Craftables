import React from 'react';
import {Link} from 'react-router';
class UserDropdown extends React.Component {
  constructor(props){
    super(props)
    this.handleClick=this.handleClick.bind(this);
    this.displayForm = this.displayForm.bind(this);
    this.profileClicked = this.profileClicked.bind(this);
    this.state = {clicked : false}
  }


  handleClick(e){
    e.preventDefault();
    this.props.logout().then(localStorage.setItem("user", ""));;
  }
  profileClicked(){
    let newState = !this.state.clicked;
    this.setState({clicked:newState})
  }

  displayForm(){
    if(this.state.clicked){
      return(
        <div className="dropdown-option">
          <div className="dropdown-menu-contents">
            <div>Profile</div>
            <div>New Project</div>
            <div>
              <button onClick={this.handleClick} className="logout-button">Log Out</button>
            </div>
          </div>
        </div>
      )
    }else {
      return <div></div>
    }
  }

  render(){
    if(localStorage.user === ""){

      return <div></div>;
    }
    return (
      <div className="dropdown-form">
        <button onClick={this.profileClicked}>|_|</button>
        {this.displayForm()}
      </div>
    )
  }
}


export default UserDropdown;

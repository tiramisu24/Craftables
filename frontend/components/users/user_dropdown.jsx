import React from 'react';
import {Link} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import {DropdownButton, MenuItem} from 'react-bootstrap';

class UserDropdown extends React.Component {
  constructor(props){
    super(props)
    this.handleClick=this.handleClick.bind(this);
    this.displayForm = this.displayForm.bind(this);
    this.profileClicked = this.profileClicked.bind(this);
    this.state = {clicked : false}
  }

  redirect(path){
    const history = createHistory();
    history.push(path)
  }
  handleClick(e){
    e.preventDefault();
    this.props.logout().then(() => {
      this.setState({clicked:false})
    });
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
            <div>
              <Link to={`/profile_page/${localStorage.id}`}>Profile</Link></div>
            <div>
              <Link to="/new_project">New Project</Link>
            </div>
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
    if(localStorage.user===undefined){

      return <div></div>;
    }
    return (
      <div className="dropdown-form">
        <DropdownButton title={<i className="fa fa-bars" aria-hidden="true"></i>
} noCaret id="header-dropdown" className="header-dropdown" onClick={this.profileClicked}>
          <MenuItem href="#/homepage">Homepage</MenuItem>
          <MenuItem href={`#/profile_page/${localStorage.id}`}>Profile <i className="fa fa-user-circle-o" aria-hidden="true"></i></MenuItem>
          <MenuItem href="#/new_project">New Project</MenuItem>
          <MenuItem>
            <button onClick={this.handleClick} className="logout-button">Log Out</button>
          </MenuItem>
        </DropdownButton>
      </div>
    )
  }
}


export default UserDropdown;

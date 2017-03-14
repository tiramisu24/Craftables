import React from 'react';
import {Link} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import merge from 'lodash/merge';

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {username: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  redirect(path){

    const history = createHistory();
    history.push(path);
  }

  update(input){
    return event => this.setState({[input]: event.target.value })
  }

  handleSubmit(event){
    event.preventDefault();
    let user = this.state
    this.props.processForm( {user} )
              .then(this.redirect('/'));
}

  render(){
    let input_header = <div></div>;
    if(this.props.formType === "login"){
      input_header = <div>
        Log In
        <Link to='/signup'>Sign Up</Link>
      </div>
    }else {
      input_header = <div>
        Sign Up
        <Link to='/login'>Log In</Link>
      </div>
    }
    let show_errors = <div></div>;

    if(this.props.loggedIn) return null;
    if(!!this.props.errors){
      show_errors = this.props.errors.map((er,idx) => (
        <li key={idx}>{er}</li>
      ))
    }

    return (
      <div>
        {input_header}
        <ul>
          {show_errors}
        </ul>
        <form className="auth-form" onSubmit={this.handleSubmit}>
          <label>Username
            <input type="text" onChange={this.update("username")}></input>
          </label>
          <label>Password
            <input type="password" onChange={this.update("password")}></input>
          </label>
          <input type="submit"></input>
        </form>
      </div>
    )

  }
}
export default SessionForm;

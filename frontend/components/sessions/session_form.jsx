import React from 'react';
import {Link, hashHistory} from 'react-router';
import merge from 'lodash/merge';

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {username: "", password: ""};
  }


  redirect(path){
    hashHistory.push(path);
  }

  update(input){
    return () => {
      this.setState({[input]: event.target.value })
    }
  }

  handleSubmit(event){
    return () => {
      event.preventDefault();
      const user = merge({}, this.state);
      this.props.processForm(user)
          .then(() => this.redirect("/"));
    }
  }

  render(){
    let input_header = <div></div>;
    if(this.props.formType === "login"){
      input_header = <div>
        Log In
        <Link to='api/users'>Sign Up</Link>
      </div>
    }else {
      input_header = <div>
        Sign Up
        <Link to='api/session'>Sign Up</Link>
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
        <form className="auth-form" onSubmit={this.handleSubmit(event)}>
          <label>Username
            <input type="text" onChange={this.update("username")}></input>
          </label>
          <label>Password
            <input type="password" onChange={this.update("password")}></input>
          </label>
        </form>
      </div>
    )

  }
}

import React from 'react';
import {Link} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import merge from 'lodash/merge';
import Modal from 'react-bootstrap-modal';

class LoginModal extends React.Component{
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.initialState();
  }

  initialState() {
    return {
      open: false,
      username: '',
      email: '',
    };
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
    const user = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.processForm( {user} );
  }

  openModal(){
    return () => this.setState({open: true});
  }

  closeModal(){
    return () => this.setState({open: false});
  }

  render(){
    let show_errors = <div></div>;
    if(this.props.loggedIn) return null;
    if(!!this.props.errors){
      show_errors = this.props.errors.map((er,idx) => (
        <li key={idx}>{er}</li>
      ))
    }

    return (
      <div className="modal-div">
        <button onClick={this.openModal()} className="login-button">Log In</button>
        <Modal show={this.state.open} onHide={this.closeModal()} className="login-modal">
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
          <ul>
            {show_errors}
          </ul>
        </Modal.Header>

        <Modal.Body>
          <form className="auth-form" onSubmit={this.handleSubmit}>
              <label className="modal-input">Username
                <input type="text" onChange={this.update("username")}></input>
              </label>
              <label className="modal-input">Password
                <input type="password" onChange={this.update("password")}></input>
              </label>
              <input type="submit" className="modal-input"></input>
          </form>
        </Modal.Body>
      </Modal>
    </div>
    )

  }
}
export default LoginModal;

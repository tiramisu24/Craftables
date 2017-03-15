import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import merge from 'lodash/merge';
import {Modal} from 'react-bootstrap';

class LoginModal extends React.Component{
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.showErrors = this.showErrors.bind(this);
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
    this.props.processForm({user})
              .then(this.closeModal());
  }

  openModal(){
    return () => this.setState({open: true});

  }

  closeModal(){
    return () => {
      this.props.clearErrors();
      return this.setState({open: false});
    }
  }

  showErrors(){
    let show_errors = <div></div>;

    if(!!this.props.errors){
      show_errors = this.props.errors.map((er,idx) => (
        <li key={idx}>{er}</li>
      ))
    }
    return show_errors
  }

  render(){
    if (localStorage.user !== "") return <div></div>;

    return (
      <div className="modal-div">
        <button onClick={this.openModal()} className="login-button">Log In</button>
        <Modal show={this.state.open} onHide={this.closeModal()} className="login-modal">
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
          <ul>
            {this.showErrors()}
          </ul>
        </Modal.Header>

        <form className="auth-form" onSubmit={this.handleSubmit}>
          <Modal.Body>
              <label className="modal-input">Username
                <input type="text"
                       onChange={this.update("username")}
                       placeholder="Tiramisu"></input>
              </label>
              <label className="modal-input">Password
                <input type="password"
                       onChange={this.update("password")}
                       placeholder="Password"></input>
              </label>
            </Modal.Body>
            <Modal.Footer>
              <input type="submit" className="modal-input" value="Log In"></input>
            </Modal.Footer>
          </form>

      </Modal>
    </div>
    )

  }
}
export default LoginModal;

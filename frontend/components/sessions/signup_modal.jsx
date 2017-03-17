import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import merge from 'lodash/merge';
import {Modal} from 'react-bootstrap';

class SignUPModal extends React.Component{
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demo = this.demo.bind(this);

    this.state = this.initialState();
  }

  initialState() {
    return {
      open: false,
      user: {
      username: '',
      password: ''},
      isDemo : false
    };
  }


  update(input){
    return event => this.setState({[input]: event.target.value })
  }

  handleSubmit(event){
    event.preventDefault();
    let user = null;
    if (this.state.isDemo){
      user = this.state.user
      this.props.demo({user})
                .then(this.closeModal());
    }else {
      user = this.state.user;
      this.props.processForm({user})
                .then(this.closeModal());
    }
  }
  demo(){
    const user = {
      username: "tiramisu",
      password: "password"
    }
    this.setState({user});
    this.setState({isDemo: true})
  }

  openModal(){
    return () => this.setState({open: true})
  }


  closeModal(){
    return () => {
      this.props.clearErrors();
      return this.setState({open: false});
    }
  }

  render(){
    let show_errors = <div></div>;
    if(!!this.props.errors){
      show_errors = this.props.errors.map((er,idx) => (
        <li key={idx}>{er}</li>
      ))

    }
    if (localStorage.user !== "") return <div></div>;

    return (
      <div className="modal-div">
        <button onClick={this.openModal()} className="signup-button">Sign Up</button>
        <Modal show={this.state.open} onHide={this.closeModal()} className="signup-modal">
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
          <ul>
            {show_errors}
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
              <input type="submit" className="modal-input" value="Sign Up"></input>
              <button onClick={this.demo} >DEMO</button>
            </Modal.Footer>
          </form>
      </Modal>
    </div>
    )

  }
}
export default SignUPModal;

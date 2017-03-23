import React from 'react';
import OwnProjectContainer from './own_projects_container';
import {Grid, Row, Col, Modal, Jumbotron} from 'react-bootstrap';
class ProfilePage extends React.Component{
  constructor(props){
    super(props)
    this.state={
      userId: this.props.match.params.id,
      bio: undefined,
      img_url: undefined,
      open: false,
      user: {}
    }
    this.changeUser = this.changeUser.bind(this);
    this.update = this.update.bind(this);
    this.showEditButton = this.showEditButton.bind(this);
    // this.openEditForm = this.openEditForm.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  componentWillMount(){
    this.props.getUser(this.state.userId)
  }

  componentWillReceiveProps(nextProps){
    let user = nextProps.user
    this.setState({user})
  }

  update(){
    return event => {
      event.preventDefault();
      this.setState({bio: event.target.value});
    };
  }

  handleCloudinary() {
    return (e) => {
      e.preventDefault();
      cloudinary.openUploadWidget(cloudinary_options, (error, results) => {
        if(error){
          console.log(error);
        }else{

          this.setState({img_url: results[0].secure_url})
        }
      })
    }
  }
  openModal(){
    return () => {
      return this.setState({open: true})
    };

  }

  closeModal(){
    return () => {
      return this.setState({open: false})
    }
  }


  changeUser(){
    let user =this.state.user;
    if(this.state.bio) user.bio = this.state.bio;
    if(this.state.img_url) user.img_url = this.state.img_url;
    this.props.changeInfo(user)
    this.setState({bio: undefined, img_url: undefined})
    this.closeModal();
  }
  showEditButton(){
    if(localStorage.id === this.state.userId){
      return (
        <div className="profile-modal">
          <button onClick={this.openModal()} className="update-button">Update Profile</button>
          <Modal show={this.state.open} onHide={this.closeModal()} >

          <Modal.Header closeButton>
            <Modal.Title>Edit Profile</Modal.Title>
          </Modal.Header>
          <form onSubmit={this.changeUser}>
            <Modal.Body>
              <div>
                <button className="edit-profile-photo" onClick={this.handleCloudinary().bind(this)}> Modify Profile Photo</button>

              </div>
              <textarea onChange={this.update()}
                className="edit-profile-bio"
                placeholder="Add a bio..." ></textarea>
              <input type="submit" value="Change Info"></input>
            </Modal.Body>
          </form>
        </Modal>
        </div>
      )
    }else{
      return <div></div>
    }

  }
  // shouldOpenForm(){
  //   let newState = !this.state.open;
  //   this.setState({open: newState})
  // }
  // openEditForm(){
  //   if(this.state.open){
  //     return<form onSubmit={this.changeUser}>
  //       <textarea onChange={this.update()}
  //         value={this.state.bio}
  //         placeholder="Add a bio..."></textarea>
  //       <div><button className="edit-photo" onClick={this.handleCloudinary().bind(this)}> Modify Profile Photo</button></div>
  //       <input type="submit" value="Change Info"></input>
  //     </form>
  //   }else{
  //     return <div></div>
  //   }
  //
  // }


  render(){
    if(!this.state.user.username) return <div></div>
    let user = this.state.user
    return <div>
      <div className="placeholder"></div>

        <div className = "user-info">
          <div className="profile-img-container">
            <img src={user.img_url} className="profile-img"/>
          </div>
          <div className="profile-user-des">
            <h3>Welcome {user.username}</h3>
            <div>{user.bio}</div>
            <div>Joined: {user.created_at.slice(0,10)}</div>
          </div>
        {this.showEditButton()}
        </div>

        <div className="my-project-list">
          <h2>My Projects</h2>
          <OwnProjectContainer userId={this.state.userId}/>
        </div>
    </div>
  }
}

export default ProfilePage;

import React from 'react';
import OwnProjectContainer from './own_projects_container';
import {Grid, Row, Col} from 'react-bootstrap';
class ProfilePage extends React.Component{
  constructor(props){
    super(props)
    this.state={
      userId: this.props.match.params.id,
      bio: undefined,
      img_url: undefined,
      shouldOpen: false,
      user: {}
    }
    this.changeUser = this.changeUser.bind(this);
    this.update = this.update.bind(this);
    this.showEditButton = this.showEditButton.bind(this);
    this.openEditForm = this.openEditForm.bind(this);
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

  changeUser(){
    let user =this.state.user;
    if(this.state.bio) user.bio = this.state.bio;
    if(this.state.img_url) user.img_url = this.state.img_url;
    this.props.changeInfo(user)
    this.setState({bio: undefined, img_url: undefined})
  }
  showEditButton(){
    if(localStorage.id === this.state.userId){
      return <button onClick={this.shouldOpenForm.bind(this)}/>
    }else{
      return <div>sldjglksdjgkl</div>
    }

  }
  shouldOpenForm(){
    let newState = !this.state.shouldOpen;
    this.setState({shouldOpen: newState})
  }
  openEditForm(){
    if(this.state.shouldOpen){
      return<form onSubmit={this.changeUser}>
        <textarea onChange={this.update()}
          value={this.state.bio}
          placeholder="Add a bio..."></textarea>
        <div><button className="edit-photo" onClick={this.handleCloudinary().bind(this)}> Modify Profile Photo</button></div>
        <input type="submit" value="Change Info"></input>
      </form>
    }else{
      return <div></div>
    }

  }


  render(){
    if(!this.state.user.username) return <div></div>
    let user = this.state.user
    return <Grid>
      <Row className="placeholder">k</Row>
      <Row className = "user-info">
        <Col sm={3}>
            <img src={user.img_url} className="profile-img"/>
        </Col>
        <Col sm={3}>
          <Row>Welcome {user.username}</Row>
          <Row>{user.bio}</Row>
        </Col>
        <Col sm={3}>
          <Row>
            {this.showEditButton()}
            {this.openEditForm()}
          </Row>        
        </Col>
      </Row>
      <Row>

      </Row>
      <Row>
        <h2>My Projects</h2>
        <OwnProjectContainer userId={this.state.userId}/>
      </Row>
    </Grid>
  }
}

export default ProfilePage;

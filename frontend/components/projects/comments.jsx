import React from 'react';
import {Grid, Row, Col, Jumbotron} from 'react-bootstrap';
import {Link} from 'react-router-dom';


class Comments extends React.Component{
  constructor(props){
    super(props);

    this.state= {
      projectId : this.props.projectId,
      comments : this.props.comments,
      commentDes : ""
    }
  }
  componentWillMount(){
    this.props.getAllComments(this.state.projectId);
  }


  componentWillReceiveProps(nextProps){
    let comments = nextProps.comments
    this.setState({comments})
  }

  handleSubmit(event){
    event.preventDefault();
    let comment = {
      project_id: this.state.projectId,
      description: this.state.commentDes
    }
    if(localStorage.id !== "") comment.author_id = localStorage.id;

    this.props.createComment(comment)
    let newComment ={
      projectId : this.props.projectId,
      comments : {},
      commentDes : ""
    }
    this.setState(newComment)


  }

  update(event){
    this.setState({commentDes: event.target.value});
  }

  userProfilePicture(comment){
    let user = comment.author;
    let userInfo = undefined;
    if(user && user.img_url){
      userInfo = (
        <Col className="comment-user-info">
          <Col sm={6} className="comment-img">
            <Link to={`/profile_page/${user.id}`}
              className="profile-pic-extra-small">
              <img src={user.img_url}/>
            </Link >

          </Col>
          <Col sm={6} className="comment-info">
              <div>{user.username}</div>
              <div>{comment.created_at.slice(0,10)}
            </div>
          </Col>
        </Col>
      )
    }
    else{
      userInfo = (
        <Col className="comment-user-info">
          <Col sm={6} className="comment-img">

            <img src="http://res.cloudinary.com/dezhy95vj/image/upload/c_scale,w_360/v1490381081/default_user_profile_a0uir4.jpg"></img>
          </Col>
          <Col sm={6} className="comment-info">
              <div>Annoynomus</div>
              <div>{comment.created_at.slice(0,10)}
            </div>
          </Col>
        </Col>
      )
    }
    return userInfo;
  }

  render(){
    if(Object.keys(this.state.comments) === 0) return<div></div>;
    let comments = Object.keys(this.state.comments).map(key => (
      <Row className="each-comment" key={key}>
        {this.userProfilePicture(this.state.comments[key])}
        <Row>
          <Col>
            {this.state.comments[key].description}
          </Col>
        </Row>
      </Row>
    ));
    return <div>
        {comments}
      <form onSubmit={this.handleSubmit.bind(this)} className="submit-comment">
        <label>
          <input type="text" onChange={this.update.bind(this)} placeholder="Add a comment..." value={this.state.commentDes}/>
        </label>
        <input type = "submit" value="Comment"/>
      </form>
    </div>
  }
}

export default Comments;

import React from 'react';
import {Grid, Row, Col, Jumbotron} from 'react-bootstrap'


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

  render(){
    if(Object.keys(this.state.comments) === 0) return <div></div>;
    let comments = Object.keys(this.state.comments).map(key => (
      <Row className="each-comment" key={key}>
        <Col className="comment-user-info">
          <Col sm={6} className="comment-img">User profile picture</Col>
          <Col sm={6} className="comment-info">
              <div>{this.state.comments[key].author.username}</div>
              <div>{this.state.comments[key].created_at.slice(0,10)}
            </div>
          </Col>
        </Col>

        <Col sm={12}>
          {this.state.comments[key].description}
        </Col>
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

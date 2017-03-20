import React from 'react';

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
      <li key={key}>
        <div>
          {this.state.comments[key].description}
        </div>
        <div>{this.state.comments[key].author.username}</div>
        <div>{this.state.comments[key].created_at}</div>
      </li>
    ));
    return <div>
      <ul>
        {comments}
      </ul>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          <input type="text" onChange={this.update.bind(this)} placeholder="Add a comment..."/>
        </label>
        <input type = "submit" value="Comment"/>
      </form>
    </div>
  }
}

export default Comments;

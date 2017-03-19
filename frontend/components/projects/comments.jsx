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
      author_id: "",
      project_id: this.state.projectId,
      description: this.state.commentDes
    }
    this.props.createComment(comment)
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
      </form>
    </div>
  }
}

export default Comments;

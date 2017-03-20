import React from 'react';
import createHistory from 'history/createBrowserHistory';
import {Link} from 'react-router-dom';
import {Grid, Row, Col, Jumbotron} from 'react-bootstrap'
import Comments from './comments_container'


class ShowProject extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      projectId : this.props.match.params.id,
      projectsHash: this.props.projectsHash,
    }
    this.deleteProject = this.deleteProject.bind(this);
    this.deleteButton = this.deleteButton.bind(this);
  }

  componentWillMount(){
    this.props.showProject(this.state.projectId);
  }

  // componentDidUpdate() {
  //   let hash = this.props.location.hash.replace('#', '');
  //   if (hash) {
  //       let node = ReactDOM.findDOMNode(this.refs[hash]);
  //       if (node) {
  //           node.scrollIntoView();
  //       }
  //   }
  // }


  componentWillReceiveProps(nextProps){
    // debugger;
    let projectsHash = {
      projectsHash: nextProps.projectsHash,
      projectId: this.props.match.params.id,
    }

    this.setState(projectsHash)
  }
  deleteProject(){
    this.props.removeProject(this.state.projectId);
    this.props.history.push("/homepage");

  }

  deleteButton(author_name){
    if(localStorage.user !== author_name){
      return <div></div>
    }else {
      return <div className="edit-buttons">
        <Link to={`/edit_project/${this.state.projectId}`}>Update Project</Link>
        <button onClick={this.deleteProject}>Delete This Project</button>
      </div>
    }
  }
  render(){
    let projectList = this.state.projectsHash;
    if(Object.keys(projectList).length === 0) return <div></div>;
    let projectId = this.state.projectId;
    let project = projectList[projectId];
    // debugger;
    if(!project.steps) return <div></div>;
    let steps = project.steps.map(step => (
      <div className="single-step" key={step.id}>
        <h5>{step.title}</h5>
        <div className="single-step-img">Future img</div>
        <p>{step.body}</p>
      </div>
    ))
    return (
      <div>

        <Jumbotron id="project-show-main-picture">Future Image</Jumbotron>

      <Grid className="project-show-main">
        <Row className="main-body no-gutters">
          <Col md={8} sm={12} >
            <Row className="project-show-nav">
              <Link to="#show-page-instructions">Instructions</Link>
              <Link to="#show-page-author-bio">Author</Link>
              <Link to="#show-page-comments">Comments</Link>

            </Row>
            <Row className="project-show-header">
                <Col sm={10}>
                  <h1 className="project-show-title">{project.title}</h1>
                  <h4 className="project-show-author">By: {project.author.username}</h4>
                </Col>
                <Col sm={2}>User Img</Col>
            </Row>
            <Row className="project-show-body">
                <div className="project-show-intro">
                  <h3>
                    Description:
                  </h3>
                  <h4>{project.body}</h4>
                </div>
                <div className="steps-list" id="show-page-instructions">
                  <h3>Instructions: </h3>
                  <div>
                    {steps}
                  </div>
                </div>
                <div className="delete-button">{this.deleteButton(project.author.username)}</div>
            </Row>
          </Col>
          <Col md={4} sm={12} className="project-show-bio">
              <div>About this Project</div>
              <div>Favorites</div>
              <div>Views</div>
              <div>Done</div>
              <div>Date Posted</div>
              <div>{project.author.username}</div>
              <div> Author pic</div>
              <div>Other Projects of author</div>
          </Col>
        </Row>
        <Row id="show-page-author-bio">
              <div>Add Author Bio</div>
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </Row>
        <Row>
          <Col md={12} className="project-show-comments">
            <h3 id="show-page-comments">Comments</h3>
            <Comments projectId={this.state.projectId}/>
          </Col>
        </Row>
      </Grid>
        </div>

      )
  }
}

export default ShowProject;

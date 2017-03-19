import React from 'react';
import createHistory from 'history/createBrowserHistory';
import {Link} from 'react-router-dom';

class ShowProject extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      projectId : this.props.match.params.id,
      projectsHash: this.props.projectsHash
    }
    this.deleteProject = this.deleteProject.bind(this);
    this.deleteButton = this.deleteButton.bind(this);
  }

  componentWillMount(){
    if(this.state.projectId){
      this.props.showProject(this.state.projectId);
    }
  }


  componentWillReceiveProps(nextProps){

    let projectsHash = {
      projectsHash: nextProps.projectsHash,
      projectId: this.props.match.params.id
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
    let steps = project.steps.map(step => (
      <li key={step.id}>
        <h5>{step.title}</h5>
        <p>{step.body}</p>
      </li>
    ))
    return <div className="project-show-main">
      <div className="project-show-header">
        <h2>{project.title}</h2>
        <h4>By: {project.author.username}</h4>
      </div>
      <p>Description: {project.body}</p>
      <ul className="steps-list">
        <h4>Instructions: </h4>
        {steps}</ul>
      <div className="delete-button">{this.deleteButton(project.author.username)}</div>
    </div>
  }
}

export default ShowProject;

import React from 'react';
import createHistory from 'history/createBrowserHistory';

class ShowProject extends React.Component{
  constructor(props){
    super(props);
    const Re = /\/project\/\d+/;
    const Red = /\d+/;
    const ProjectIdPath = window.location.hash.match(Re)[0];
    const projId = ProjectIdPath.match(Red)[0];
    this.state = {
      projectId : projId,
      project: this.props.project
    }
    this.deleteProject = this.deleteProject.bind(this);
    this.deleteButton = this.deleteButton.bind(this);
  }

  componentWillMount(){
    if(this.state.projectId){
      this.props.showProject(this.state.projectId);
    }
  }
  redirect(path){
    const history = createHistory();
    history.push("/");
    window.location.reload();
  }
  componentWillReceiveProps(nextProps){
    let project = nextProps.project[this.state.projectId]
    this.setState({project})
  }
  deleteProject(){
    this.props.removeProject(this.state.projectId)
              .then(this.redirect("/"));
  }

  deleteButton(){
    if(localStorage.user !== this.state.project.author.username){
      return <div></div>
    }else {
      return <button onClick={this.deleteProject}>Delete This Project</button>
    }
  }
  render(){
    let project = this.state.project;
    // debugger;
    if(Object.keys(project).length === 0) return <div></div>
    debugger;
    let steps = this.state.project.steps.map(step => (
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
      <div className="delete-button">{this.deleteButton()}</div>
    </div>
  }
}

export default ShowProject;

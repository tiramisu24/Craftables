import React from 'react';
import createHistory from 'history/createBrowserHistory';

class ShowProject extends React.Component{
  constructor(props){
    super(props);
    const Re = /\/Project\/\d+/;
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
    if(Object.keys(project).length === 0) return <div></div>
    return <div>
      Got here id:{this.state.projectId}
      <div>
        <h2>Project Title:{project.title}</h2>
        <h3>By :{project.author.username}</h3>
      </div>
      <p>Instructions:{project.body}</p>
      <h3>Author:{project.author.username}</h3>
      <div>{this.deleteButton()}</div>
    </div>
  }
}

export default ShowProject;

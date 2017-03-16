import React from 'react';

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
  }

  componentWillMount(){
    if(this.state.projectId){
      this.props.showProject(this.state.projectId);
    }
  }

  componentWillReceiveProps(nextProps){
    let project = nextProps.project[this.state.projectId]
    this.setState({project})
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
    </div>
  }
}

export default ShowProject;

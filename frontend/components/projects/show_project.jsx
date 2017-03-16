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
    return <div>
      Got here id:{this.state.projectId}
      <h2>{project.title}</h2>
      <p>{project.body}</p>
    </div>
  }
}

export default ShowProject;

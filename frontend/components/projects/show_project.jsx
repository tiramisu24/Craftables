import React from 'react';

class ShowProject extends React.Component{
  constructor(props){

    super(props);
    const Re = /\/Project\/\d+/;
    const Red = /\d+/;
    const ProjectIdPath = window.location.hash.match(Re)[0];
    const projId = ProjectIdPath.match(Red)[0];

    this.state = {
      projectId : projId
    }
  }
  render(){
    return <div>Got here {this.state.projectId}</div>
  }
}

export default ShowProject;

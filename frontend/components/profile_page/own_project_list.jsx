import React from 'react';
import {Link} from 'react-router-dom';
import ProjectList from '../project_list'

class OwnProjects extends React.Component{
  constructor(props){
    super(props);
    this.state = {projectList :this.props.projectsHash};
  }

  componentWillMount(){
    this.props.showMyProjects();
  }

  componentWillReceiveProps(nextProps){
    let projectList = nextProps.projectsHash;
    this.setState({projectList})
  }

  render(){
    let projects = this.state.projectList;
    if(Object.keys(projects).length === 0) return <div></div>;
    return <ProjectList projects={projects}/>
  }

}
export default OwnProjects;

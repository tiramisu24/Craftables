import React from 'react';
import {Link} from 'react-router-dom';
import {Grid, Row, Col} from 'react-bootstrap';
import ProjectList from '../project_list'


class SearchResult extends React.Component{
  constructor(props){
    super(props);
    localStorage.setItem("searching", "false");
    this.state = {projectList :this.props.projectsHash};

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
export default SearchResult;

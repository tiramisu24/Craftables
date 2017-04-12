import React from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron,Grid, Row, Col} from 'react-bootstrap';
import ProjectList from '../project_list';
import AuthButtons from '../header/auth_buttons';
import FeaturedProjectsContainer from '../homepage/featured_projects_container';


class SearchResult extends React.Component{
  constructor(props){
    super(props);
    localStorage.setItem("searching", "false");
    // this.state = {projectList :this.props.projectsHash};

  }

  componentWillReceiveProps(nextProps){
    // let projectList = nextProps.projectsHash;
    // this.setState({projectList})

  }
  createProjectButton(){
    if(localStorage.user === undefined){
      return <div className="search-action-buttons">
        <AuthButtons/>
      </div>
    }else{
      return <div className="search-action-buttons">
        <Link to="new_project">New Project</Link>
      </div>
    }
  }

  render(){
    let projects = this.props.projectsHash;
    if(Object.keys(projects).length === 0) {
      return <div className="search-result-page">
          <div className="placeholder"></div>
          <div className="no-result-page">
            <div>No Results with your query :(</div>
            <div>Why don't you create a new project?</div>
            {this.createProjectButton()}
          </div>
      </div>;
    }
    else{
      return<div className="search-result-page">
        <div className="placeholder"></div>
        <ProjectList projects={projects}/>
      </div>
    }


  }

}
export default SearchResult;

import React from 'react';
import {Link} from 'react-router-dom';
import {Grid, Row, Col} from 'react-bootstrap';

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

    let wrappedList = Object.keys(projects).map(projectId => (
      <Link to={`/project/${projectId}`} key={projectId} className="card-project">
        <div className="card-project-image">Image goes here</div>
        <div className = "card-project-title">{projects[projectId].title}</div>
      </Link>
    ))
    return(
      <ul className="search-project-list">
        {wrappedList}
      </ul>
    )
  }

}
export default SearchResult;

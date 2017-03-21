import React from 'react';
import {Link} from 'react-router-dom';

class FeaturedProjects extends React.Component{
  constructor(props){
    super(props);
    this.state = {projectList :this.props.projectsHash};
  }

  componentWillMount(){
    this.props.showProjects();
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
        <div className = "card-img-card">
          <img className="img-card" src={projects[projectId].img_url}></img>
        </div>
        <div className = "card-project-info">
          <div className = "card-project-title">{projects[projectId].title}</div>
          <div className = "card-project-author">{projects[projectId].author.username}</div>
        </div>
      </Link>
    ))
    return(
      <ul className="search-project-list">
        {wrappedList}
      </ul>
    )
  }

}
export default FeaturedProjects;

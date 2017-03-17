import React from 'react';

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
      <div key={projectId} className="card-project">
        <div className="card-project-image">Image goes here</div>
        <div className = "card-project-title">{projects[projectId].title}</div>
      </div>
    ))
    return(
      <ul className="featured-project-list">
        {wrappedList}
      </ul>
    )
  }

}
export default FeaturedProjects;

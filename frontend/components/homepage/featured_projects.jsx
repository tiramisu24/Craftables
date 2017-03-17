import React from 'react';

class FeaturedProjects extends React.Component{
  constructor(props){
    super(props);
    this.state = {projectList :this.props.project};
  }

  componentWillMount(){
    this.props.showProjects();
  }

  componentWillReceiveProps(nextProps){
    let projectList = nextProps.project;
    this.setState({projectList})
  }

  render(){
    if(Object.keys(this.props.project).length === 0) return <div></div>;


    let wrappedList = this.state.projectList.project.map(project => (
      <div key={project.id} className="card-project">
        <div className="card-project-image">Image goes here</div>
        <div className = "card-project-title">{project.title}</div>
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

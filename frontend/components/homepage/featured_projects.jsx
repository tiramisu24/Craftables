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
    if(Object.keys(this.props.project).length === 0) return <div>no projects</div>;

      debugger;

    let wrappedList = this.state.projectList.project.map(project => (
      <div key={project.id}>
        <div>{project.title}</div>
      </div>
    ))
    return(
      <ul>
        there is project
        {wrappedList}
      </ul>
    )
  }

}
export default FeaturedProjects;

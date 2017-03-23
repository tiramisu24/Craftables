import React from 'react';
import {Link} from 'react-router-dom';

const ProjectList = ({projects}) => {
  let wrappedList = Object.keys(projects).map(projectId => (
    <Link to={`/project/${projectId}`} key={projectId} className="card-project">
      <div className = "card-img-card">
        <div>
          <img className="img-card" src={projects[projectId].img_url}></img>

        </div>
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

export default ProjectList;

import React from 'react';
import Header from '../header/header';
import {Link} from 'react-router-dom';
import FeaturedProjectsContainer from './featured_projects_container';


const HomePage = () => (
  <div>
    <div>
      Search Box Goes Here
    </div>
      <FeaturedProjectsContainer/>
  </div>
)

export default HomePage;

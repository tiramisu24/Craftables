import React from 'react';
import Header from '../header/header';
import {Link} from 'react-router-dom';
import FeaturedProjectsContainer from './featured_projects_container';
import SearchBarContainer from '../search/search_bar_container'
import {Jumbotron} from 'react-bootstrap';


const HomePage = () => (
  <div className="homepage">

        <Jumbotron id="front-page-search">

          <SearchBarContainer/>
        </Jumbotron>

      <FeaturedProjectsContainer/>
  </div>
)

export default HomePage;

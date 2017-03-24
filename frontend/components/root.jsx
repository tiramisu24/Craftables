import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, Redirect} from 'react-router';
import { HashRouter } from 'react-router-dom';
import App from './app'
import HomePage from './homepage/homepage';
import CreateProjectContainer from './projects/new_project_container';
import ShowProjectContainer from './projects/show_project_container';
import UpdateProjectContainer from './projects/update_project_container';
import SearchResultContainer from './search/search_result_container';
import Header from './header/header'
import ProfilePageContainer from './profile_page/profile_page_container'
import Footer from './footer'


const Root = ({store}) => (
  <Provider store={store}>
    <HashRouter>
      <App>
        <Route path ='/' component={Header}/>
        <Route path='/homepage' component={HomePage}/>
        <Route path='/new_project' component={CreateProjectContainer}/>
        <Route path='/project/:id' component={ShowProjectContainer}/>
        <Route path ='/edit_project/:id' component={UpdateProjectContainer}/>
        <Route path ='/search_results' component={SearchResultContainer}/>
        <Route path ='/profile_page/:id' component={ProfilePageContainer}/>
        <Route path ='/' component={Footer}/>

      </App>
    </HashRouter>
  </Provider>
)
export default Root;

import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, Redirect} from 'react-router';
import { HashRouter } from 'react-router-dom';
import App from './app'
import HomePage from './homepage/homepage';
import CreateProjectContainer from './projects/new_project_container';
import ShowProjectContainer from './projects/show_project_container'
import Header from './header/header'



const Root = ({store}) => (
  <Provider store={store}>
    <HashRouter>
      <App>
        <Route path ='/' component={Header}/>
        <Route path='/homepage' component={HomePage}/>
        <Route path='/new_project' component={CreateProjectContainer}/>
        <Route path='/project/:id' component={ShowProjectContainer}/>
      </App>
    </HashRouter>
  </Provider>
)
export default Root;

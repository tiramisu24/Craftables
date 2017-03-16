import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute} from 'react-router';
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
        <Route path='/homePage' component={HomePage}/>
        <Route path='/newProject' component={CreateProjectContainer}/>
        <Route path='/Project/:id' component={ShowProjectContainer}/>
      </App>
    </HashRouter>
  </Provider>
)
export default Root;

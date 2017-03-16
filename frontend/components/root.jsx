import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute} from 'react-router';
import { HashRouter } from 'react-router-dom';
import App from './app'
import HomePage from './homepage/homepage';
import CreateProjectContainer from './projects/new_project_container';
import ShowProject from './projects/show_project'


const Root = ({store}) => (
  <Provider store={store}>
    <HashRouter>
      <App>
        <Route path='/' component={HomePage}/>
        <Route path='/newProject' component={CreateProjectContainer}/>
        <Route path='/Project/:id' component={ShowProject}/>
      </App>
    </HashRouter>
  </Provider>
)
export default Root;

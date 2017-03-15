import React from 'react';
import { Provider } from 'react-redux';
import HomePage from './homepage/homepage';
import { Router, Route, IndexRoute} from 'react-router';
import { HashRouter } from 'react-router-dom';


const Root = ({store}) => (
  <Provider store={store}>
    <HashRouter>
        <Route path='/' component={HomePage}/>
    </HashRouter>
  </Provider>
)
export default Root;

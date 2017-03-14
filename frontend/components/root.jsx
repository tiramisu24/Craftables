import React from 'react';
import { Provider } from 'react-redux';
import HomePage from './app'
import SignUPModalContainer from './sessions/signup_modal_container';
import LoginModalContainer from './sessions/login_modal_container';
import { Router, Route, IndexRoute} from 'react-router';
import { HashRouter } from 'react-router-dom';


const Root = ({store}) => (
  <Provider store={store}>
    <HashRouter>
        <HomePage>
            <Route path='/' component={SignUPModalContainer}/>
            <Route path='/' component={LoginModalContainer}/>
        </HomePage>
    </HashRouter>
  </Provider>
)
export default Root;

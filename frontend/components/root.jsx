import React from 'react';
import { Provider } from 'react-redux';
import App from './app'
import SessionFormContainer from './sessions/session_form_container';
import { Router, Route, IndexRoute} from 'react-router';
import { HashRouter } from 'react-router-dom';


const Root = ({store}) => (
  <Provider store={store}>
    <HashRouter>
      <Route path='/'>
        <App>
          <Route path="/login" component={ SessionFormContainer } />
          <Route path="/signup" component={ SessionFormContainer }/>
        </App>
      </Route>
    </HashRouter>
  </Provider>
)
export default Root;

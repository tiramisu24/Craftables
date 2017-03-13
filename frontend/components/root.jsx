import React from 'react';
import { Provider } from 'react-redux';
import App from './app'



const Root = ({store}) => (
  <Provider store={store}>
    <Router history={ hashHistory}>
      <Route path='/' component={App}>
        
      </Route>
    </Router>
  </Provider>

)

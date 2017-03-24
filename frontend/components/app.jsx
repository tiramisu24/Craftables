import React from 'react';
import {Redirect} from 'react-router';

const App = ({children}) => (
  <div>
    {(window.location.hash === "#/") ? (<Redirect to="/homepage"/>) : <div></div>}
    {children}
  </div>
)

export default App;

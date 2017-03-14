import React from 'react'


const HomePage = ({children}) => (
  <div>
    <div className="header">
      <div className="logo"><h4>Craftables</h4></div>
      <div className="auth-modals">
        {children}
      </div>
    </div>
  </div>
)

export default HomePage;

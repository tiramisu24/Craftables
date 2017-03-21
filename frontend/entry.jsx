import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

let preloadedState = {};
// if(localStorage.user !== ""){
//   preloadedState = {
//     session: {
//       currentUser: {
//         username: localStorage.user,
//         id: localStorage.id
//       }
//     }
//   }
// }

document.addEventListener('DOMContentLoaded', ()=> {
  let store;
  // debugger
  store = configureStore(preloadedState);
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root)
})

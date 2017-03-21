import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

let preloadedState = {};
if(localStorage.user !== ""){
  preloadedState = {
    session: {
      currentUser: {
        username: localStorage.user,
        id: localStorage.id
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', ()=> {
  let store;
  store = configureStore(preloadedState);
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root)
})

$( document ).ready(function() {

  var $sidebar = $('#sidebar');
  if (!!$sidebar.offset()) { // make sure ".sidebar" element exists
    console.log("in sidebar");

    var generalSidebarHeight = $sidebar.innerHeight();
    var sidebarTop = $sidebar.offset().top;
    var stickOffset = 0;

    $(window).scroll(function(){ // scroll event
      console.log("inside window");
      var windowTop = $(window).scrollTop(); // returns number

      if (stopPoint < windowTop) {
          $sidebar.css({ position: 'fixed', top: stickOffset });
      } else {
          $sidebar.css({position: 'absolute', top: 'initial'});
      }
    });

  }
});

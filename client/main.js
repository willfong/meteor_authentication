import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './app';
import Home from './home';


const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);


Meteor.startup(()=>{
  ReactDOM.render(routes, document.querySelector('.render-target'));
});

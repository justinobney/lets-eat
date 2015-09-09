import React from 'react/addons';
import {Route} from 'react-router';
import App from 'pages/shared/App';
import Home from 'pages/home/Home';
import Login from 'pages/login/Login';
import store from 'stores/index';

function checkAuth(nextState, transition) {
  let {uiState} = store.getState();
  if (!uiState.isAuthorized) {
    transition.to('/login', null, {nextPathname: nextState.location.pathname});
  }
}

const routes = (
  <Route>
    <Route component={App} onEnter={checkAuth}>
      <Route path="/" component={Home}/>
    </Route>
    <Route path="/login" component={Login}/>
  </Route>
);

export default routes;

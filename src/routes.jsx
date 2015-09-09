import React, {Component} from 'react/addons';
import {Route} from 'react-router';
import App from 'pages/shared/App';
import Home from 'pages/home/Home';

class Login extends Component {
  displayName = 'Login component'
  render() {
    return (<div>Log In</div>);
  }
}

const routes = (
  <Route>
    <Route component={App}>
      <Route path="/" component={Home}/>
    </Route>
    <Route path="/login" component={Login}/>
  </Route>
);

export default routes;

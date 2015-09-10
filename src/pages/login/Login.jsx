import React, {Component} from 'react/addons';
import {Grid, Row, Col, Panel} from 'react-bootstrap';
import {connect} from 'react-redux';
import {initialize} from 'redux-form';
import {bindActionCreators} from 'redux';

import {login, register} from 'actions/buttonActions';
import LoginForm from './LoginForm';
import LoadingBar from 'pages/shared/LoadingBar'

function mapStateToProps(reducers) {
    const {uiState} = reducers;
    return {uiState};
}

function mapDispatchToProps(dispatch) {
    return {
        buttonActions: bindActionCreators({login, register}, dispatch),
        dispatch
    };
}

class Login extends Component {
  displayName = 'Login component'
  handleSubmit(payload) {
    let { router } = this.context;
    let action = payload.isSignup ? 'register' : 'login';
    this.props.buttonActions[action](payload, router);
    this.props.dispatch(initialize('loginForm', {...payload, password: ''}));
  }
  render() {
    let loading = this.props.uiState.loading;
    return (
      <Grid>
        <Row>
          <Col xs={4} xsOffset={4}>
            <br />
            <Panel header="Log In -or- Register?">
              <LoginForm onSubmit={::this.handleSubmit} />
            </Panel>
          </Col>
        </Row>
        <LoadingBar pending={loading.pending} complete={loading.complete} />
      </Grid>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

Login.contextTypes = {
  router: React.PropTypes.object.isRequired
};

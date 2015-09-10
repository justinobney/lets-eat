import React, {Component} from 'react/addons';
import {Grid, Row, Col, Panel} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {login} from 'actions/buttonActions';
import LoginForm from './LoginForm';

function mapStateToProps(reducers) {
    const {uiState} = reducers;
    return {uiState};
}

function mapDispatchToProps(dispatch) {
    return {
        buttonActions: bindActionCreators({login}, dispatch),
        dispatch
    };
}

class Login extends Component {
  displayName = 'Login component'
  handleSubmit(payload) {
    let { router } = this.context;
    this.props.buttonActions.login(payload, router);
  }
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={4} xsOffset={4}>
            <br />
            <Panel header="Log In">
              <LoginForm onSubmit={::this.handleSubmit} />
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

Login.contextTypes = {
  router: React.PropTypes.object.isRequired
};

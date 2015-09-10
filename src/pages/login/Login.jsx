import React, {Component} from 'react/addons';
import {Row, Col, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {login} from 'actions/buttonActions';

function mapStateToProps(reducers) {
    const {uiState} = reducers;
    return {uiState};
}

function mapDispatchToProps(dispatch) {
    return {
        buttonActions: bindActionCreators({login}, dispatch)
    };
}

class Login extends Component {
  displayName = 'Login component'
  logIn() {
    let { router } = this.context;
    this.props.buttonActions.login(router);
  }
  render() {
    return (
      <Row>
          <Col xs={12}>
            <Button bsSize="large" onClick={::this.logIn}>
              Log In
            </Button>
          </Col>
        </Row>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

Login.contextTypes = {
  router: React.PropTypes.object.isRequired
};

import React, {Component} from 'react/addons';
import {Row, Col, Button} from 'react-bootstrap';

export default class Login extends Component {
  displayName = 'Login component'
  logIn() {
    let { router } = this.context;
    router.transitionTo('/', null, null);
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

Login.contextTypes = {
  router: React.PropTypes.object.isRequired
};

import React, {Component} from 'react/addons';
import {Grid, Row, Col, Panel, Input, ButtonInput} from 'react-bootstrap';
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
  logIn(e) {
    e.preventDefault();
    let { router } = this.context;
    this.props.buttonActions.login(router);
  }
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={4} xsOffset={4}>
            <br />
            <Panel header="Log In">
              <form onSubmit={::this.logIn}>
                <Input type="text" label="username" />
                <Input type="password" label="Password" />
                <ButtonInput type="submit" 
                  onClick={::this.logIn}
                  value="Log In" />
              </form>
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

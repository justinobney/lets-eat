import React, {Component} from 'react/addons';
import {Row, Col, Button, Label} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {handleClick} from 'actions/buttonActions';
import {initialize} from 'redux-form';
import HomeForm from './HomeForm';

function mapStateToProps(reducers) {
    const {uiState} = reducers;
    return {uiState};
}

function mapDispatchToProps(dispatch) {
    return {
        buttonActions: bindActionCreators({handleClick}, dispatch),
        dispatch
    };
}

class Home extends Component {
  displayName = 'Home component'
  _handleClick() {
    this.props.buttonActions.handleClick();
  }
  handleSubmit(data) {
    console.log('Submission received!', data);
    this.props.dispatch(initialize('homeForm', {})); // clear form
  }
  render() {
      return (
        <Row>
          <Col xs={12}>
            <h1>{this.props.uiState.title}</h1>
            <Button bsSize="large" onClick={::this._handleClick}>Click Me Now</Button>
            <hr />
            <h1>
              I was clicked <Label bsStyle="success">{this.props.uiState.clicks}</Label> times
            </h1>
          </Col>
          <Col xs={4}>
            <HomeForm onSubmit={::this.handleSubmit}/>
          </Col>
        </Row>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

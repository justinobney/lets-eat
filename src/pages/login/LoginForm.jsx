import React, {Component} from 'react/addons';
import {Input, ButtonInput} from 'react-bootstrap';
import {connectReduxForm} from 'redux-form';

class LoginForm extends Component {
  displayName = 'Login Form component'
  render() {
    const { fields: {email, password, isSignup}, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Input type="text" label="Email"
          placeholder="john@aol.com" {...email} />
        <Input type="password" label="Password"
          placeholder="not 'password'..." {...password} />
        <Input type="checkbox" label="Register" {...isSignup} />
        <ButtonInput type="submit" value="Log In -or- Register?"
          bsStyle="info" block
          onClick={handleSubmit} />
      </form>
    );
  }
}

export default connectReduxForm({
  form: 'loginForm', // the name of your form and the key to where your form's state will be mounted
  fields: ['email', 'password', 'isSignup'] // a list of all your fields in your form
})(LoginForm);

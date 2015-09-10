import React, {Component} from 'react/addons';
import {Input, ButtonInput} from 'react-bootstrap';
import {connectReduxForm} from 'redux-form';

class HomeForm extends Component {
  displayName = 'HomeForm component'
  render() {
    const { fields: {name, address, phone}, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Input type="text" label="Name" {...name} />
        <Input type="text" label="Address" {...address} />
        <Input type="text" label="Phone" {...phone} />
        <ButtonInput type="submit" onClick={handleSubmit} value="Submit" />
      </form>
    );
  }
}

export default connectReduxForm({
  form: 'homeForm', // the name of your form and the key to where your form's state will be mounted
  fields: ['name', 'address', 'phone'] // a list of all your fields in your form
})(HomeForm);

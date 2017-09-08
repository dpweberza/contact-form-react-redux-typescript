import * as React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button } from 'react-bootstrap';

import Input from './form/Input';

// TODO style text area
class ContactPage extends React.Component {
  render() {
    return (
        <form>
          <h3>Contact Us</h3>
          <p>Please fill in the form below and click submit to send us a message.</p>
          <Field type="text" name="fullName" component={Input} label="Full Name" />
          <Field type="email" name="emailAddress" component={Input} label="Email Address" />
          <Field componentClass="textarea" name="message" component={Input} label="Message" />
          <Button type="submit" bsStyle="primary">
            Submit
          </Button>
        </form>
    );
  }
}

// TODO move validation to common utility
const validate = values => {
  const errors = {emailAddress: ''};
  const requiredFields = ['fullName', 'emailAddress', 'message'];
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required';
    }
  });
  if (values.emailAddress && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailAddress)) {
    errors.emailAddress = 'Invalid email address';
  }
  return errors;
};

export default reduxForm({
  form: 'ContactForm',
  validate
})(ContactPage);
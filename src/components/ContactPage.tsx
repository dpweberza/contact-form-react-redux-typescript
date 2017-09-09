import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, InjectedFormProps } from 'redux-form';
import { ButtonToolbar, Button, Alert } from 'react-bootstrap';

import Field from './form/Field';
import Input from './form/Input';
import ContactService from '../api/contactService';
import { storeContactFormDetails, clearContactFormDetails } from '../store/actions';
import Logger from '../util/logger';
import { required, email, minLength } from '../util/validators';

interface FormValues {
  fullName: string;
  emailAddress: string;
  message: string;
}

interface Props extends InjectedFormProps {
  clearStoredValues: () => {};
}

class ContactPage extends React.Component<Props> {

  private submitted: boolean = false;
  private success: boolean = false;

  constructor(props: Props) {
    super(props);

    this.submit = this.submit.bind(this);
    this.clearValues = this.clearValues.bind(this);
  }

  async submit(values: FormValues, dispatch: Dispatch<{}>) {
    const contactService = new ContactService();
    
    try {
      await contactService.createMessage(values.fullName, values.emailAddress, values.message);
      dispatch(storeContactFormDetails(values));
      this.success = true;
    } catch (err) {
      Logger.error(err);
      this.success = false;
    } finally {
      this.submitted = true;
    }
  }

  clearValues() {
    this.props.clearStoredValues();
    this.props.reset();
    Logger.debug('Cleared stored and form values!');
  }

  render() {
    let message;
    if (this.submitted) {
        if (this.success) {
          message = (
            <Alert bsStyle="success">
            <strong>Success!</strong><span> Thanks for getting in touch, we'll get back to you asap.</span>
            </Alert>
          );
        } else {
          message = (
            <Alert bsStyle="danger">
            <strong>Error!</strong> 
            <span> Unfortunately you message could not be sent to us, please try again later or contact support.</span>
            </Alert>
          );
        }
    }

    return (
      <div>
        {message}
        <form onSubmit={this.props.handleSubmit(this.submit)}>
          <h3>Contact Us</h3>
          <p>Please fill in the form below and click submit to send us a message.</p>
          <Field 
            type="text" 
            name="fullName" 
            validate={[required, minLength(3)]} 
            component={Input} 
            label="Full Name" 
          />
          <Field 
            type="email" 
            name="emailAddress" 
            validate={[required, email]} 
            component={Input} 
            label="Email Address" 
          />
          <Field 
            componentClass="textarea" 
            name="message" 
            validate={[required, minLength(10)]} 
            component={Input} 
            label="Message" 
          />
          <ButtonToolbar>
            <Button type="submit" bsStyle="primary" disabled={this.props.submitting}>
              Submit
            </Button>
            <Button onClick={this.clearValues}>
              Clear Values
            </Button>
          </ButtonToolbar>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  initialValues: state.contactform.details
});

const mapDispatchToProps = dispatch => {
  return {
    clearStoredValues: () => {
      dispatch(clearContactFormDetails());
    }
  };
};

let InitializeFromStateForm = reduxForm({
  form: 'ContactForm',
  enableReinitialize: true
})(ContactPage);

InitializeFromStateForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(InitializeFromStateForm);

export default InitializeFromStateForm;
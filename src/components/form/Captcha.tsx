import * as React from 'react';
import { FormGroup, HelpBlock } from 'react-bootstrap';
import { WrappedFieldProps } from 'redux-form';
import Recaptcha from 'react-recaptcha';

import Logger from '../../util/logger';

export interface InputProps extends WrappedFieldProps {
  name: string;
  label: string;
}

/**
 * This component combines ReduxForm's validation with Google's Recaptcha
 */
class Captcha extends React.Component<InputProps> {

  private recaptchaInstance;

  constructor(props: InputProps) {
    super(props);
    this.verifyResponse = this.verifyResponse.bind(this);
    this.clearResponse = this.clearResponse.bind(this);
  }

  componentWillReceiveProps(nextProps: InputProps) {
    Logger.debug(nextProps);
    if (nextProps.meta.pristine) {
      this.recaptchaInstance.reset();
    }
  }

  verifyResponse(response: string) {
    Logger.debug(response);
    this.props.input.onChange(response);
  }

  clearResponse() {
    this.props.input.onChange(null);
  }

  onLoad() {
    Logger.debug('Recaptcha initialised!');
  }

  render() {
    const meta = this.props.meta;
    const validationState = meta.touched ? (meta.error ? 'error' : 'success') : undefined;
    const help = meta.touched ? <HelpBlock>{meta.error}</HelpBlock> : undefined;
    return (
      <FormGroup controlId={this.props.name} validationState={validationState}>
        <Recaptcha
          ref={e => this.recaptchaInstance = e}
          sitekey="6Ld6IDAUAAAAADRQsvZHIHFcORd68NY9gPhzc36q"
          render="explicit"
          verifyCallback={this.verifyResponse}
          expiredCallback={this.clearResponse}
          onloadCallback={this.onLoad}
        />
        {help}
      </FormGroup>
    );
  }
}

export default Captcha;
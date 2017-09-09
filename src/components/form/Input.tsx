import * as React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import { WrappedFieldProps } from 'redux-form';

export interface InputProps extends WrappedFieldProps {
  name: string;
  type?: string;
  label: string;
  componentClass?: string;
}

/**
 * This component combines ReduxForm's validation with Bootstrap's inputs.
 */
class Input extends React.Component<InputProps> {

  constructor(props: InputProps) {
      super(props);
  }

  render() {
    const meta = this.props.meta;
    const validationState = meta.touched ? (meta.error ? 'error' : 'success') : undefined;
    const help = meta.touched ? <HelpBlock>{meta.error}</HelpBlock> : undefined;
    return (
        <FormGroup controlId={this.props.name} validationState={validationState}>
          <ControlLabel>{this.props.label}</ControlLabel>
          <FormControl componentClass={this.props.componentClass} type={this.props.type} {...this.props.input} />
          <FormControl.Feedback />
          {help}
        </FormGroup>
    );
  }
}

export default Input;
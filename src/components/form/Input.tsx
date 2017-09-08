import * as React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

class Input extends React.Component<IInputProps> {

  constructor(props: IInputProps) {
      super(props);
  }

  render() {
    const meta = this.props.meta;
    const validationState = meta.touched ? (meta.error ? 'error' : 'success') : undefined;
    const help = meta.touched ? <HelpBlock>{meta.error}</HelpBlock> : undefined;
    return (
        <FormGroup controlId={this.props.id} validationState={validationState}>
          <ControlLabel>{this.props.label}</ControlLabel>
          <FormControl componentClass={this.props.componentClass} type={this.props.type} {...this.props.input} />
          <FormControl.Feedback />
          {help}
        </FormGroup>
    );
  }
}

export default Input;
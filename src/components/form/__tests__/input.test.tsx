import * as React from 'react';
import { mount } from 'enzyme';

import Input from '../Input';

function setup() {
  const props: any = {
    name: 'fullName',
    label: 'Full Name',
    type: 'text',
    meta: { touched: false }
  };

  const enzymeWrapper = mount(<Input {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe('Input tests', () => {
  it('should render correctly', () => {
    const { props, enzymeWrapper } = setup();
    expect(enzymeWrapper.find('label').text()).toEqual(props.label);
    expect(enzymeWrapper.find('input[type="' + props.type + '"]').exists());
  });
});
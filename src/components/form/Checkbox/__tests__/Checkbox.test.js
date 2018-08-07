import React from 'react';
import { shallow } from 'enzyme';
import CheckboxStyled, { CheckboxInput } from './../Checkbox';

describe('<Checkbox />', () => {
  test('CSS', () => {
    const mountedComponent = shallow(<CheckboxStyled
      className="test"
      placeholder="test"
      field="test"
    >
      TEST
    </CheckboxStyled>);
    expect(mountedComponent).toMatchSnapshot();
  });

  test('HTML', () => {
    const mountedComponent = shallow(<CheckboxInput
      className="test"
      placeholder="test"
      field="test"
    >
      TEST
    </CheckboxInput>);
    expect(mountedComponent).toMatchSnapshot();
  });
});

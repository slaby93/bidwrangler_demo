import React from 'react';
import { shallow } from 'enzyme';
import TextStyled, { TextInput } from './../Text';

describe('<Text />', () => {
  test('CSS', () => {
    const mountedComponent = shallow(<TextStyled
      className="test"
      placeholder="test"
    >
      TEST
    </TextStyled>);
    expect(mountedComponent).toMatchSnapshot();
  });

  test('HTML', () => {
    const mountedComponent = shallow(<TextInput
      className="test"
      placeholder="test"
    >
      TEST
    </TextInput>);
    expect(mountedComponent).toMatchSnapshot();
  });
});

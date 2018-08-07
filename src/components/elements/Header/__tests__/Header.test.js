import React from 'react';
import { shallow } from 'enzyme';
import Header from './../Header';

describe('<Header />', () => {
  test('CSS', () => {
    const mountedComponent = shallow(<Header
      className="test"
      placeholder="test"
    >
      TEST
    </Header>);
    expect(mountedComponent).toMatchSnapshot();
  });
});

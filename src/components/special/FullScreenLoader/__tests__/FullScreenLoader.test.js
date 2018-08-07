import React from 'react';
import { shallow } from 'enzyme';
import FullScreenLoaderStyled, { FullScreenLoader } from './../FullScreenLoader';

describe('<FullScreenLoader />', () => {
  test('CSS', () => {
    const mountedComponent = shallow(<FullScreenLoaderStyled />);
    expect(mountedComponent).toMatchSnapshot();
  });

  test('HTML', () => {
    const mountedComponent = shallow(<FullScreenLoader
      className="test"
    />);
    expect(mountedComponent).toMatchSnapshot();
  });
});

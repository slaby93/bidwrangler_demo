import React from 'react';
import { shallow } from 'enzyme';
import LoaderStyled, { Loader } from './../Loader';

describe('<Loader />', () => {
  test('CSS', () => {
    const mountedComponent = shallow(<LoaderStyled />);
    expect(mountedComponent).toMatchSnapshot();
  });

  test('HTML', () => {
    const mountedComponent = shallow(<Loader
      className="test"
    />);
    expect(mountedComponent).toMatchSnapshot();
  });

  describe('props', () => {
    test('container', () => {
      const mountedComponent = shallow(<LoaderStyled container />);
      expect(mountedComponent).toMatchSnapshot();
    });
  });
});

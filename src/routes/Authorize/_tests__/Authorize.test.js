import React from 'react';
import { shallow } from 'enzyme';
import AuthorizeStyled, { Authorize } from './../Authorize';

describe('<Authorize />', () => {
  test('CSS', () => {
    const mountedComponent = shallow(<AuthorizeStyled
      location={{}}
      match={{ url: 'test1' }}
    />);
    expect(mountedComponent).toMatchSnapshot();
  });

  test('HTML', () => {
    const mountedComponent = shallow(<Authorize
      location={{}}
      match={{ url: 'path' }}
      className="test"
    />);
    expect(mountedComponent).toMatchSnapshot();
  });
});

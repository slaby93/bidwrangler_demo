import React from 'react';
import { fromJS } from 'immutable';
import { shallow } from 'enzyme';
import { LoginContainer, mapStateToProps, mapDispatchToProps } from './../LoginContainer';

jest.mock('./../Login');

describe('<LoginContainer />', () => {
  test('basic render', () => {
    const mountedComponent = shallow(<LoginContainer />);
    expect(mountedComponent).toMatchSnapshot();
  });

  test('mapStateToProps', () => {
    expect(mapStateToProps(fromJS({
      user: {
        isLoggin: true,
      },
    }))).toMatchSnapshot();
    expect(mapStateToProps(fromJS({
      user: {
        isLoggin: false,
      },
    }))).toMatchSnapshot();
  });

  describe('mapDispatchToProps', () => {
    const dispatch = jest.fn();

    test('result shape', () => {
      dispatch.mockReset();
      const result = mapDispatchToProps(dispatch);
      expect(result).toMatchSnapshot();
    });

    test('onSubmit', () => {
      dispatch.mockReset();
      const result = mapDispatchToProps(dispatch);
      const data = { email: 'test1', password: 'test2' };
      result.onSubmit(data);
      expect(dispatch).toBeCalledWith({ type: 'USER/LOGIN/REQUEST', payload: { ...data } });
    });
  });
});

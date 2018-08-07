import React from 'react';
import { shallow } from 'enzyme';
import LoginStyled, { Login } from './../Login';

jest.mock('utils/form/canSubmit', () => true);

describe('<Login />', () => {
  test('CSS', () => {
    const mountedComponent = shallow(<LoginStyled
      onSubmit={jest.fn()}
    />);
    expect(mountedComponent).toMatchSnapshot();
  });

  test('HTML', () => {
    const mountedComponent = shallow(<Login
      onSubmit={jest.fn()}
      className="test"
    />);
    expect(mountedComponent).toMatchSnapshot();
  });
});

describe('errorValidator', () => {
  const { errorValidator } = Login;

  test('all valid', () => {
    expect(errorValidator({
      email: 'test@test.pl',
      password: 'Password1',
    })).toMatchSnapshot();
  });

  describe('email', () => {
    test('empty', () => {
      expect(errorValidator({
        email: '',
        password: 'Password1',
      })).toMatchSnapshot();
    });

    test('invalid format', () => {
      expect(errorValidator({
        email: 'test@',
        password: 'Password1',
      })).toMatchSnapshot();
    });
  });

  describe('password', () => {
    test('empty', () => {
      expect(errorValidator({
        email: 'test@test.pl',
        password: '',
      })).toMatchSnapshot();
    });

    test('lack of uppercase', () => {
      expect(errorValidator({
        email: 'test@test.pl',
        password: '1enough_chars',
      })).toMatchSnapshot();
    });

    test('lack of lowercase', () => {
      expect(errorValidator({
        email: 'test@test.pl',
        password: '1_ENOUGH_CHARS',
      })).toMatchSnapshot();
    });

    test('lack of number', () => {
      expect(errorValidator({
        email: 'test@test.pl',
        password: 'PasswordOne',
      })).toMatchSnapshot();
    });
  });
});

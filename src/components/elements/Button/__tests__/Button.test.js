import React from 'react';
import { shallow } from 'enzyme';
import Button from './../Button';

describe('<Button />', () => {
  test('CSS', () => {
    const mountedComponent = shallow(<Button
      group="1"
      value="a"
      field="test"
      className="test"
    >
      TEST
    </Button>);
    expect(mountedComponent).toMatchSnapshot();
  });

  describe('props', () => {
    test('grow', () => {
      const mountedComponent = shallow(<Button
        group="1"
        value="a"
        field="test"
        className="test"
        grow
      >
        TEST
      </Button>);
      expect(mountedComponent).toMatchSnapshot();
    });

    test('disabled', () => {
      const mountedComponent = shallow(<Button
        group="1"
        value="a"
        field="test"
        className="test"
        disabled
      >
        TEST
      </Button>);
      expect(mountedComponent).toMatchSnapshot();
    });

    test('round', () => {
      const mountedComponent = shallow(<Button
        group="1"
        value="a"
        field="test"
        className="test"
        round
      >
        TEST
      </Button>);
      expect(mountedComponent).toMatchSnapshot();
    });

    test('text', () => {
      const mountedComponent = shallow(<Button
        group="1"
        value="a"
        field="test"
        className="test"
        text
      >
        TEST
      </Button>);
      expect(mountedComponent).toMatchSnapshot();
    });

    test('noBorder', () => {
      const mountedComponent = shallow(<Button
        group="1"
        value="a"
        field="test"
        className="test"
        noBorder
      >
        TEST
      </Button>);
      expect(mountedComponent).toMatchSnapshot();
    });
  });
});

import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button.jsx';

describe('<Button />', () => {
  it('renders without crashing', () => {
    shallow(<Button />);
  });

  it('simulates click events', () => {
    const onButtonClick = jest.fn();
    const button = shallow(<Button onClick={onButtonClick} />);
    button.find('button').simulate('click');
    expect(onButtonClick.mock.calls.length).toEqual(1);
  });

  it('should render anchor tag', () => {
    const button = shallow(<Button href="test" />);
    expect(button.find('a').length).toEqual(1);
  });

  it('should render inner text', () => {
    const button = shallow(<Button>Submit</Button>);
    expect(button.text()).toEqual('Submit');
  });

  it('should be disabled', () => {
    const button = shallow(<Button disabled>Submit</Button>);
    expect(button.find('button').prop('disabled')).toEqual(true);
  });

  it('should renders button correctly', () => {
    const wrapper = shallow(<Button>Submit</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should renders anchor tag correctly', () => {
    const wrapper = shallow(<Button href="/link">Link</Button>);
    expect(wrapper).toMatchSnapshot();
  });
});

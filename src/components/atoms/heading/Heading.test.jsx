import React from 'react';
import { shallow } from 'enzyme';

import Heading from './Heading.jsx';

describe('<Heading />', () => {
  it('renders without crashing', () => {
    shallow(<Heading text="title" />);
  });

  it('should render h1 tag', () => {
    const heading = shallow(<Heading text="title" />);
    expect(heading.find('h1').length).toEqual(1);
  });

  it('should render h4 tag', () => {
    const heading = shallow(<Heading type="h4" text="title" />);
    expect(heading.find('h4').length).toEqual(1);
  });

  it('should render inner text', () => {
    const heading = shallow(<Heading type="h1" text="title" />);
    expect(heading.text()).toEqual('title');
  });

  it('should render and match snapshot with basic config', () => {
    const wrapper = shallow(
      <Heading type="h1" text="title" />
    );

    expect(wrapper).toMatchSnapshot();
  });
});

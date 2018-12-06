import React from 'react';
import { shallow } from 'enzyme';

import Paragraph from './Paragraph.jsx';

const caption = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

describe('<Paragraph />', () => {
  it('renders without crashing', () => {
    shallow(<Paragraph>{caption}</Paragraph>);
  });

  it('should render with correct caption', () => {
    const paragraph = shallow(<Paragraph className="a-paragraph--large">{caption}</Paragraph>);
    expect(paragraph.text()).toEqual(caption);
  });

  it('should render and match snapshot with basic config', () => {
    const wrapper = shallow(
      <Paragraph>{caption}</Paragraph>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

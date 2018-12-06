import React from 'react';
import { shallow } from 'enzyme';

import RichText from './RichText.jsx';

describe('<RichText />', () => {
  it('should render without crashing', () => {
    shallow(<RichText />);
  });

  it('should render with correct markup', () => {
    const text = 'Lorem ipsum dolor';
    const richtext = shallow(<RichText html={text} />);
    expect(richtext.text()).toEqual(text);
  });

  it('should render and match snapshot with basic html input', () => {
    const html = '<div class="example"><h1>Title</h1><p>Content</p></div>';
    const wrapper = shallow(
      <RichText html={html} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

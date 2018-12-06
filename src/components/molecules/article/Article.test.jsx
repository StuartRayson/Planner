import React from 'react';
import { shallow } from 'enzyme';

import Article from './Article.jsx';

const config = {
  title: 'title',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
};

describe('<Article />', () => {
  it('renders without crashing', () => {
    shallow(<Article {...config} />);
  });

  it('should render and match snapshot with basic config', () => {
    const wrapper = shallow(
      <Article {...config} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

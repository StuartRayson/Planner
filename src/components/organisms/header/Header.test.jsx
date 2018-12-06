import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header.jsx';

describe('<Header />', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('menu should toggle', () => {
    const header = shallow(<Header />);
    header.setState({ isOpen: true });
    header.instance().handleToggle();
    expect(header.instance().state.isOpen).toEqual(false);
  });

  it('should render and match snapshot with basic config', () => {
    const wrapper = shallow(
      <Header />
    );

    expect(wrapper).toMatchSnapshot();
  });
});

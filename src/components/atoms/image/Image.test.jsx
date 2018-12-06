import React from 'react';
import { shallow } from 'enzyme';

import Image from './Image.jsx';

const imageSrc = '../../../shared/assets/images/logo.svg';
const ImageAlt = 'logo';

describe('<Image />', () => {
  it('renders without crashing', () => {
    shallow(<Image src={imageSrc} alt={ImageAlt} />);
  });

  it('should render with a src attribute', () => {
    const image = shallow(<Image src={imageSrc} alt={ImageAlt} />);
    expect(image.find('img').prop('src')).toEqual(imageSrc);
  });

  it('should render with a alt attribute', () => {
    const image = shallow(<Image src={imageSrc} alt={ImageAlt} />);
    expect(image.find('img').prop('alt')).toEqual(ImageAlt);
  });

  it('should render and match snapshot with basic config', () => {
    const wrapper = shallow(
      <Image src={imageSrc} alt={ImageAlt} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});

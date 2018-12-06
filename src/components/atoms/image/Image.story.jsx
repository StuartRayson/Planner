import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import getTestResults from '../../../getTestResults';
import Image from './Image.jsx';

storiesOf('atoms/Image', module)
  .addDecorator(withKnobs)
  .addDecorator(getTestResults('Image'))
  .add('Image', () => (
    <Image
      className={text('Class name', '')}
      alt={text('alt', 'Image Description ...')}
      src={text('src', 'https://source.unsplash.com/random')}
      width={text('Width', '500')}
      height={text('Height', 'auto')}
    />
  ));

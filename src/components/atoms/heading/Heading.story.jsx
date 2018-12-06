import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, selectV2 } from '@storybook/addon-knobs/react';
import getTestResults from '../../../getTestResults';
import Heading from './Heading.jsx';
import config from './config.json';

storiesOf('atoms/Heading', module)
  .addDecorator(withKnobs)
  .addDecorator(getTestResults('Heading'))
  .add('Heading', () => (
    <Heading
      className={text('Class name', '')}
      type={selectV2('Type', config.titles, 'h1')}
      text={text('Text', 'Heading')}
    />
  ));

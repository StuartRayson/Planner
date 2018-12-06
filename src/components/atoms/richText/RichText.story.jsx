import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import getTestResults from '../../../getTestResults';
import RichText from './RichText.jsx';
import config from './config.json';

storiesOf('atoms/RichText', module)
  .addDecorator(withKnobs)
  .addDecorator(getTestResults('Paragraph'))
  .add('RichText', () => (
    <RichText
      html={text('HTML', config.html)}
    />
  ));

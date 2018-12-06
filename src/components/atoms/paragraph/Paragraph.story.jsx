import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import getTestResults from '../../../getTestResults';
import Paragraph from './Paragraph.jsx';

storiesOf('atoms/Paragraph', module)
  .addDecorator(withKnobs)
  .addDecorator(getTestResults('Paragraph'))
  .add('Paragraph', () => (
    <Paragraph
      className={text('Class name', '')}
    >
      {text('text', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.')}
    </Paragraph>
  ));

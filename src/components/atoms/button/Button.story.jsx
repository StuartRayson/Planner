import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, selectV2 } from '@storybook/addon-knobs/react';
import getTestResults from './../../../getTestResults';
import Button from './Button.jsx';

storiesOf('atoms/Button', module)
  .addDecorator(withKnobs)
  .addDecorator(getTestResults('Button'))
  .add('Button', () => (
    <Button
      className={text('Class name', '')}
      variant={selectV2('Variant', { Primary: 'primary', Secondary: 'secondary' }, 'primary')}
      disabled={boolean('Disabled', false)}
      href={text('Href', '')}
      onClick={action('clicked')}
    >
      {text('Text', 'Button Text')}
    </Button>
  ));

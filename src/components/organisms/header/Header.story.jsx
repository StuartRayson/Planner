import React from 'react';
import { storiesOf } from '@storybook/react';
import getTestResults from '../../../getTestResults';
import Header from './Header.jsx';

storiesOf('organisms/Header', module)
  .addDecorator(getTestResults('Header'))
  .add('Header', () => (
    <Header />
  ));

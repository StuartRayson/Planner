import React from 'react';
import { storiesOf } from '@storybook/react';
import Planner from './Planner.jsx';
import data from './data/default.json';


storiesOf('templates/HomePage', module)
  .add('HomePage', () => (
    <Planner {...data} />
  ));

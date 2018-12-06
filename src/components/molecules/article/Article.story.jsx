import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import getTestResults from '../../../getTestResults';
import Article from './Article.jsx';

storiesOf('molecules/Article', module)
  .addDecorator(withKnobs)
  .addDecorator(getTestResults('Article'))
  .add('with title & content', () => (
    <Article
      title={text('Title', 'Cupcake ipsum dolor. Sit amet danish.')}
      content={text('Content', 'Bear claw toffee marshmallow chocolate icing cookie cotton candy bear claw gummies. Candy cake croissant carrot cake pudding jelly-o topping. Jelly-o jelly beans sweet roll chupa chups. Gingerbread apple pie sesame snaps sweet roll wafer lemon drops.')}
    />
  ));

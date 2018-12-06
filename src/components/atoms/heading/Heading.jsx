import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import './heading.scss';

const Heading = ({ type = 'h1', text, className }) => {
  const TagName = type;
  const classes = classNames(
    'a-heading',
    `a-heading--${type}`,
    className
  );

  return (
    <TagName className={classes}>
      {text}
    </TagName>
  );
};

Heading.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  type: PropTypes.string
};

export default Heading;

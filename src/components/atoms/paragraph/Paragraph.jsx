import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const Paragraph = ({ className, children }) => {
  const classes = classNames(
    'a-paragraph',
    className
  );

  return (
    <p className={classes}>
      {children}
    </p>
  );
};

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default Paragraph;

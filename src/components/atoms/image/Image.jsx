import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const Image = (props) => {
  const classes = classNames(
    'a-image',
    props.className
  );

  return (
    <img {...props} alt={props.alt} className={classes} />
  );
};

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

export default Image;

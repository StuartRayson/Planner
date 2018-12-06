import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = (props) => {
  const {
    variant = 'primary',
    href,
    disabled,
    onClick,
    children,
    className } = props;
  const TagName = href ? 'a' : 'button';
  const classes = classNames(
    'a-button',
    `a-button--${variant}`,
    disabled && 'a-button--disabled',
    className
  );

  const attributeOverrides = {
    variant: undefined,
    disabled: (TagName === 'button') && disabled,
    onClick: (TagName === 'button' && onClick) ? onClick : undefined
  };

  return (
    <TagName {...props} {...attributeOverrides} className={classes}>
      {children}
    </TagName>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  href: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;

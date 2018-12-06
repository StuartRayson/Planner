import classNames from 'classnames';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Heading from '../../atoms/heading/Heading.jsx';
import Image from '../../atoms/image/Image.jsx';
import Button from '../../atoms/button/Button.jsx';

import logo from '../../../shared/assets/images/logo.svg';
import './header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: !this.props.closed
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const classes = classNames(
      'o-header',
      !this.state.isOpen && 'o-header--closed',
      this.props.className
    );

    return (
      <header className={classes}>
        <div className="o-header__content">
          <Image
            className="o-header__logo"
            src={logo}
            height={80}
            alt="React logo"
          />
          <Heading
            className="o-header__title"
            text="Welcome to Inviqa React Starter"
          />
        </div>
        <Button
          className="o-header__toggle"
          onClick={this.handleToggle}
          variant="primary"
        >
        toggle <span role="img" aria-label="smiling face with sunglasses">😎</span>
        </Button>
      </header>
    );
  }
}

Header.propTypes = {
  className: PropTypes.string,
  closed: PropTypes.bool
};

export default Header;

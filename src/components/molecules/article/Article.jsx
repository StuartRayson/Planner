import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import RichText from '../../atoms/richText/RichText.jsx';
import Heading from '../../atoms/heading/Heading.jsx';

import './article.scss';

const Article = ({ className, title, content }) => {
  const classes = classNames(
    'm-article',
    className
  );

  return (
    <article className={classes}>
      <Heading
        type="h2"
        text={title}
        className="m-article__title"
      />
      <div className="m-article__body">
        <RichText html={content} />
      </div>
    </article>
  );
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default Article;

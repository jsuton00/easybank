import React from 'react';

const LatestArticleCard = (props) => {
  const { image, author, title, description } = props;

  return (
    <div className="latest-article-card card">
      <div className="latest-article-image card-img-top">
        <img src={image} alt={title} />
      </div>
      <div className="latest-article-card-body">
        <p className="latest-article-author">By {author}</p>
        <h5 className="latest-article-title">{title}</h5>
        <p className="latest-article-description">{description}</p>
      </div>
    </div>
  );
};

export default LatestArticleCard;

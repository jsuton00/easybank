import React from 'react';

const WhyChooseCard = (props) => {
  const { icon, title, text } = props;

  return (
    <div className="why-choose-card card">
      <div className="why-choose-card-icon card-img-top">
        <img src={icon} alt={title} />
      </div>
      <div className="why-choose-card-body card-body">
        <h5 className="why-choose-card-title">{title}</h5>
        <p className="why-choose-card-text">{text}</p>
      </div>
    </div>
  );
};

export default WhyChooseCard;

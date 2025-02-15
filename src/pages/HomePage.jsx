import React from 'react';
import RequestInviteButton from '../components/RequestInviteButton';
import mockups from '../assets/images/image-mockups.png';
import { whyChooseEasybank } from '../data/whyChooseEasybank';
import WhyChooseCard from '../components/WhyChooseCard';
import { latestArticles } from '../data/latestArticles';
import LatestArticleCard from '../components/LatestArticleCard';

const HomePage = () => {
  return (
    <div className="home-page container">
      <div className="hero-section">
        <div className="hero-text-col">
          <h1 className="hero-title">Next generation digital banking</h1>
          <p className="hero-text">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <div className="hero-button-row">
            <RequestInviteButton />
          </div>
        </div>
        <div className="hero-image-col">
          <img src={mockups} alt="mockups" />
        </div>
      </div>
      <div className="why-section">
        <h1 className="why-section-title">Why choose Easybank?</h1>
        <p className="why-section-text">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
        <div className="why-section-cards">
          {whyChooseEasybank.length > 0 &&
            whyChooseEasybank.map((why) => {
              return (
                <WhyChooseCard
                  key={why.title}
                  icon={why.icon}
                  title={why.title}
                  text={why.text}
                />
              );
            })}
        </div>
      </div>
      <div className="latest-articles-section">
        <h1 className="latest-articles-section-title">Latest Articles</h1>
        <div className="latest-articles-cards">
          {latestArticles.length > 0 &&
            latestArticles.map((article) => {
              return (
                <LatestArticleCard
                  key={article.title}
                  image={article.image}
                  author={article.author}
                  title={article.title}
                  description={article.description}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

import React from 'react';
import RequestInviteButton from '../components/RequestInviteButton';
import mockups from '../assets/images/image-mockups.png';

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
    </div>
  );
};

export default HomePage;

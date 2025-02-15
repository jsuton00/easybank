import React from 'react';
import { Link } from 'react-router-dom';
import whiteLogo from '../assets/images/whiteLogo.svg';
import { socialLinks } from '../constants/socialLinks';
import SocialLink from './SocialLink';
import RequestInviteButton from './RequestInviteButton';
import { footerNavLinks } from '../constants/navlinks';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-row container">
        <div className="footer-nav">
          <div className="footer-brand-social-links">
            <Link to="/" className="footer-brand-link">
              <img src={whiteLogo} alt="logo" />
            </Link>
            <div className="footer-social-links">
              {socialLinks.length > 0 &&
                socialLinks.map((social) => {
                  return (
                    <SocialLink
                      key={social.url}
                      url={social.url}
                      icon={social.icon}
                      alt={social.alt}
                    />
                  );
                })}
            </div>
          </div>
          <div className="footer-navmenu">
            <div className="footer-navmenu-col footer-navmenu-left-col">
              {footerNavLinks.length > 0 &&
                footerNavLinks.slice(0, 3).map((link) => {
                  return (
                    <Link
                      key={link.name}
                      to={link.url}
                      className="footer-navmenu-nav-item-link"
                    >
                      <div className="footer-navmenu-nav-item">
                        <p className="footer-navmenu-nav-item-text">
                          {link.name}
                        </p>
                      </div>
                    </Link>
                  );
                })}
            </div>
            <div className="footer-navmenu-col footer-navmenu-right-col">
              {footerNavLinks.length > 0 &&
                footerNavLinks.slice(3, 7).map((link) => {
                  return (
                    <Link
                      key={link.name}
                      to={link.url}
                      className="footer-navmenu-nav-item-link"
                    >
                      <div className="footer-navmenu-nav-item">
                        <p className="footer-navmenu-nav-item-text">
                          {link.name}
                        </p>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="footer-request">
          <RequestInviteButton />
          <p className="footer-copyright">© Easybank. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

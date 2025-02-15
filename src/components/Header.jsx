import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import RequestInviteButton from './RequestInviteButton';
import Navbar from './Navbar';
import ToggleButton from './ToggleButton';
import NavModal from './NavModal';

const Header = (props) => {
  const { width, isOpen, handleToggle, handleClose } = props;
  return (
    <header className="header">
      <div className="header-row container">
        <div className="header-brand-section">
          <Link to="/">
            <div className="header-brand">
              <Logo />
            </div>
          </Link>
        </div>
        {width < 768 ? (
          <></>
        ) : (
          <div className="header-navbar-section">
            <Navbar handleClose={handleClose} />
          </div>
        )}
        <div
          className={`header-${
            width < 992 ? 'toggle' : 'request-invite'
          }-section`}
        >
          {width < 768 ? (
            isOpen ? (
              <></>
            ) : (
              <ToggleButton isOpen={isOpen} handleToggle={handleToggle} />
            )
          ) : (
            <RequestInviteButton />
          )}
        </div>
      </div>
      {isOpen ? (
        <NavModal
          isOpen={isOpen}
          handleToggle={handleToggle}
          handleClose={handleClose}
        />
      ) : (
        <></>
      )}
    </header>
  );
};

export default Header;

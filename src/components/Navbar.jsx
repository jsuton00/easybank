import React from 'react';
import { Link } from 'react-router-dom';
import { headerNavLinks } from '../constants/navlinks';

const Navbar = (props) => {
  const { handleClose } = props;

  const onClick = () => {
    return handleClose();
  };

  return (
    <>
      {headerNavLinks.length > 0 &&
        headerNavLinks.map((link) => {
          return (
            <Link
              key={link.name}
              to={link.url}
              onClick={onClick}
              className="header-navbar-nav-item-link"
            >
              <div className="header-navbar-nav-item">
                <p className="header-navbar-nav-item-text">{link.name}</p>
              </div>
            </Link>
          );
        })}
    </>
  );
};

export default Navbar;

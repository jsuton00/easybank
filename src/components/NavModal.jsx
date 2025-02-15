import React from 'react';
import Navbar from './Navbar';
import ToggleButton from './ToggleButton';

const NavModal = (props) => {
  const { isOpen, handleToggle, handleClose } = props;

  return (
    <div className="nav-modal">
      <div className="nav-modal-content container">
        <div className="nav-modal-header">
          <div className="nav-modal-toggle">
            <ToggleButton isOpen={isOpen} handleToggle={handleToggle} />
          </div>
        </div>
        <div className="nav-modal-main">
          <div className="nav-modal-nav-menu">
            <Navbar handleClose={handleClose} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavModal;

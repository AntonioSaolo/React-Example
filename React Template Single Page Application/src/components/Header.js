import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faBars } from '@fortawesome/free-solid-svg-icons';

const Header = ({ toggleSidebar }) => {
    return (
        <header className="header">
            <div className="header-logo">
                <h1>Logo</h1>
            </div>

            <button onClick={toggleSidebar} className="menu-button">
                <FontAwesomeIcon icon={faBars} className="beat-hover" />
            </button>

            <button className="logout-button">
                <FontAwesomeIcon icon={faSignOutAlt} className="beat-hover" />
            </button>
        </header >
    );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';



const Sidebar = ({ isOpen }) => {
    return (
        <nav className={isOpen ? "sidebar open" : "sidebar"}>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/test">Test</Link></li>
            </ul>
        </nav>
    );
};
export default Sidebar;



import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css'; // Import the index.css file to use global styles

const Nav: React.FC = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink 
            to="/candidate-search" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            to="/saved-candidates" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Potential Candidates
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;





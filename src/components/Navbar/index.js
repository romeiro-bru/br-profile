import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.css';

function Navbar() {
  return (
    <navbar>
      <ul className="nav-links">
        <li><NavLink exact to="/" activeStyle={{ background: '#f4b96e' }}>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>     
      </ul>
    </navbar>
  );
}

export default Navbar;

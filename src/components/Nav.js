import React from "react";
import { Link } from 'react-router-dom'; // Importa el componente Link
import "./Nav.css";
import logo from '../icons_assets/Asset 16@4x.png';

const Nav = () => {
  return (
    <div className="Nav">
      <nav>
        <ul className="nav-list">
          <li><img src={logo} alt="Logo" /></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/booking">Reservations</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
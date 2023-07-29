import React from "react";
import "./Footer.css";
import logo from '../icons_assets/Asset 18@4x.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="column">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="column">
        <h3>Site Map</h3>
        <p>Contenido de la primera columna</p>
      </div>
      <div className="column">
        <h3>Contact Us</h3>
        <p>Contenido de la segunda columna</p>
      </div>
      <div className="column">
        <h3>Connect with us</h3>
        <p>Contenido de la tercera columna</p>
      </div>
    </footer>
  );
};


export default Footer;
import React from 'react';
import './Menu.css';
import lemon from '../icons_assets/lemon dessert.jpg';
import greek from '../icons_assets/greek salad.jpg';
import bruschetta from '../icons_assets/restauranfood.jpg';

const Menu = () => {
  return (
    <div className="menu-container-main">
      <div className="menu-background">
        <div className="menu-container">
          <h2>Menu</h2>
          <p>know all our delicious dishes</p>
        </div>
      </div>

      <div className="menu-grid">
        <MenuItem title="Lemon" description="$ 9" imageUrl={lemon} />
        <MenuItem title="Greek Salad" description="$ 9" imageUrl={greek} />
        <MenuItem title="Bruschetta" description="$ 9" imageUrl={bruschetta} />
      </div>
    </div>
  );
};

const MenuItem = ({ title, description, imageUrl }) => {
  return (
    <div className="menu-item">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Menu;
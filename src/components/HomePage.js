import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./HomePage.css";
import chef1 from '../icons_assets/Mario and Adrian A.jpg';
import chef2 from '../icons_assets/Mario and Adrian b.jpg';

import restaurant from '../icons_assets/restaurant chef B.jpg';

import lemon from '../icons_assets/lemon dessert.jpg';
import greek from '../icons_assets/greek salad.jpg';
import bruschetta from '../icons_assets/restauranfood.jpg';

const HomePage = () => {
  const navigate = useNavigate();

  const handleMenuButtonClick = () => {
    navigate('/menu');
  };

  return (
    <div>
      <div className="rectangulo-verde">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>The best restaurant of Chicago.</p>

        <img src={restaurant} alt="Imagen" style={{ height: '500px' }} />
      </div>

      <div className="rectangulo-blanco">
        <h2>Specials</h2>
        <button onClick={handleMenuButtonClick}>See complete menu</button>

        <div className="cuadrados-grises">
          <div className="cuadrado-gris">
            <img src={bruschetta} alt="Imagen" />
            <h3>Bruschetta</h3>
            <p>$12</p>
          </div>

          <div className="cuadrado-gris">
            <img src={greek} alt="Imagen" />
            <h3>Greek Salad</h3>
            <p>$6</p>
          </div>

          <div className="cuadrado-gris">
            <img src={lemon} alt="Imagen" />
            <h3>Lemon Dessert</h3>
            <p>$7</p>
          </div>
        </div>
      </div>

      <div className="rectangulo-verde-con-cuadrados-blancos">
        <div className="cuadrado-blanco">
          <img src="ruta_de_la_imagen.jpg" alt="Imagen" />
          <h2>Alice</h2>
          <p>"Lorem ipsum dolor sit amet"</p>
        </div>

        <div className="cuadrado-blanco">
          <img src="ruta_de_la_imagen.jpg" alt="Imagen" />
          <h2>Bob</h2>
          <p>"Lorem ipsum dolor sit amet"</p>
        </div>

        <div className="cuadrado-blanco">
          <img src="ruta_de_la_imagen.jpg" alt="Imagen" />
          <h2>Remy</h2>
          <p>"Lorem ipsum dolor sit amet"</p>
        </div>

        <div className="cuadrado-blanco">
          <img src="ruta_de_la_imagen.jpg" alt="Imagen" />
          <h2>Juan</h2>
          <p>"Lorem ipsum dolor sit amet"</p>
        </div>
      </div>

      <div className="rectangulo-blanco-con-dos-columnas">
        <div className="columna">
          <h2>Little Lemon</h2>
          <p>Chicago</p>
        </div>

        <div className="columna">
            <img src={chef1} style={{margin: "auto 200 auto 0", display: "block", marginBottom: "10px", height: "300px" }} alt="Chef1" />
            <img src={chef2} style={{margin: "auto 200 auto 0", display: "block" , height: "300px" }} alt="Chef2" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
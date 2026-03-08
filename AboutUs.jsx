import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>Sobre Paradise Nursery</h1>
      <div className="about-us-content">
        <p>
          Bienvenidos a Paradise Nursery, su destino confiable para plantas de interior 
          de la más alta calidad. Desde 2020, nos dedicamos a traer la belleza de la 
          naturaleza directamente a su hogar.
        </p>
        <p>
          Nuestra misión es hacer que la jardinería interior sea accesible y placentera 
          para todos. Cada planta es cuidadosamente seleccionada de viveros sostenibles.
        </p>
        <div className="services">
          <h3>Nuestros Servicios</h3>
          <ul>
            <li>🌱 Plantas de interior de alta calidad</li>
            <li>🚚 Envío seguro a domicilio</li>
            <li>💚 Asesoramiento personalizado</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

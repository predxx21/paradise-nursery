import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1>Sobre Paradise Nursery</h1>
        <div className="about-us-text">
          <p>
            Bienvenidos a Paradise Nursery, tu destino confiable para plantas de interior 
            de la más alta calidad. Desde 2020, nos dedicamos a traer la belleza de la 
            naturaleza directamente a tu hogar, ofreciendo una cuidadosa selección de 
            plantas que transformarán cualquier espacio en un paraíso verde.
          </p>
          <p>
            Nuestra misión es simple: hacer que la jardinería interior sea accesible y 
            placentera para todos. Ya seas un experto jardinero o estés comenzando tu 
            viaje con las plantas, nuestro equipo de expertos está aquí para ayudarte 
            a encontrar la planta perfecta para tu espacio y estilo de vida.
          </p>
          <p>
            Cada planta en nuestro catálogo es cuidadosamente seleccionada de viveros 
            sostenibles y cultivada con amor. Creemos en la creación de espacios más 
            verdes y saludables, una planta a la vez.
          </p>
        </div>
        <div className="about-us-features">
          <div className="feature">
            <h3>🌱 Calidad Garantizada</h3>
            <p>Todas nuestras plantas pasan por rigurosos controles de calidad</p>
          </div>
          <div className="feature">
            <h3>🚚 Envío Seguro</h3>
            <p>Embalaje especializado para que tus plantas lleguen perfectas</p>
          </div>
          <div className="feature">
            <h3>💚 Soporte Continuo</h3>
            <p>Asesoramiento post-venta para el cuidado de tus plantas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

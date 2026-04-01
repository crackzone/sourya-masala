import React from 'react';

const Hero: React.FC = () => {
  const base = import.meta.env.BASE_URL;
  return (
    <section className="hero container">
      <div className="hero-content">
        <h1>Authentic Spices for Every Kitchen</h1>
        <p>Discover the rich heritage of SOURYA MASALA. Hand-picked, sun-dried, and ground to perfection for the ultimate flavor in every dish.</p>
        <a href="#shop" className="cta-button">Explore Shop</a>
      </div>
      <div className="hero-image">
        <img src={`${base}hero.png`} alt="Sourya Masala Spices" />
      </div>
    </section>
  );
};

export default Hero;

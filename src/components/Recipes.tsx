import React from 'react';
import { Recipe } from '../types';

const Recipes: React.FC = () => {
  const recipes: Recipe[] = [
    { 
      title: 'Royal Mutton Biryani', 
      image: '/biryani.png', 
      spices: 'Garam Masala, Turmeric, Chili Powder',
      description: 'A culinary masterpiece using our premium whole spices and ground blends.'
    },
    { 
      title: 'Creamy Butter Chicken', 
      image: '/curry.png', 
      spices: 'Kashmiri Chili, Turmeric, Cumin Powder',
      description: 'The secret is in the blend. Our Kashmiri chili provides the perfect color without being too hot.'
    }
  ];

  return (
    <section className="recipes container">
      <h2 className="section-title">Cook with Sourya Masala</h2>
      <div className="product-grid">
        {recipes.map((recipe, index) => (
          <div className="recipe-card" key={index}>
            <img src={recipe.image} alt={recipe.title} className="recipe-img" />
            <div className="recipe-content">
              <div className="recipe-tag">Featured Recipe</div>
              <h3 style={{ marginBottom: '10px' }}>{recipe.title}</h3>
              <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '15px' }}>{recipe.description}</p>
              <div style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--primary)' }}>
                Key Spices: {recipe.spices}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recipes;

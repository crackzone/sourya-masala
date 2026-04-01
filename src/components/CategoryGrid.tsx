import React from 'react';
import { Category } from '../types';

const CategoryGrid: React.FC = () => {
  const categories: Category[] = [
    { name: 'Whole Spices', img: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&q=80&w=800' },
    { name: 'Ground Spices', img: 'https://images.unsplash.com/photo-1532336413238-521972584323?auto=format&fit=crop&q=80&w=800' },
    { name: 'Spice Blends', img: 'https://images.unsplash.com/photo-1593365005139-2a90cd67332c?auto=format&fit=crop&q=80&w=800' }
  ];

  return (
    <section className="categories container">
      <h2 className="section-title">Shop by Category</h2>
      <div className="category-grid">
        {categories.map((cat, index) => (
          <div className="category-card" key={index}>
            <img src={cat.img} alt={cat.name} />
            <div className="category-name">{cat.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;

import React from 'react';
import { CartItem } from '../types';

interface ProductCardProps {
  name: string;
  price: number;
  category: string;
  image: string;
  onAddToCart: (product: CartItem) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, category, image, onAddToCart }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-info">
        <div className="product-category">{category}</div>
        <h3 className="product-name">{name}</h3>
        <div className="product-price">₹{price}</div>
      </div>
      <button className="add-btn" onClick={() => onAddToCart({ name, price, image })}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

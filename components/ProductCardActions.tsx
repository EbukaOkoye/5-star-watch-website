import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardActionsProps {
  product: Product;
}

export const ProductCardActions: React.FC<ProductCardActionsProps> = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleOrderNow = (e: React.MouseEvent) => {
    e.preventDefault();
    // Add to cart and go directly to checkout
    addToCart(product, 1, product.image);
    navigate('/checkout');
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, 1, product.image);
  };

  return (
    <div className="flex items-center">
      {/* Order Now Button - 75% width */}
      <button
        onClick={handleOrderNow}
        className="w-3/4 py-3 text-[10px] tracking-[0.3em] uppercase font-bold text-white bg-stone-950 hover:bg-gold-400 transition-colors text-center"
      >
        Order Now
      </button>
      
      {/* Cart Icon Button - 25% width */}
      <button
        onClick={handleAddToCart}
        className="w-1/4 py-3 text-stone-900 bg-white hover:bg-gold-50 transition-colors border border-gold-200 flex items-center justify-center"
      >
        {/* Cart Wheel SVG Icon */}
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
        >
          {/* Cart body */}
          <path 
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v2m0 0v2a2 2 0 01-2 2H9a2 2 0 01-2-2v-2m10 0H9" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          {/* Wheels */}
          <circle cx="9" cy="20" r="1" fill="currentColor" />
          <circle cx="17" cy="20" r="1" fill="currentColor" />
        </svg>
      </button>
    </div>
  );
};

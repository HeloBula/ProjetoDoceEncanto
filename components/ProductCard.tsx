
import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
      <img className="w-full h-56 object-cover" src={product.image} alt={product.title} />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-zinc-800 mb-2">{product.title}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <a href="#" className="inline-flex items-center font-semibold text-fuchsia-600 hover:text-fuchsia-800 transition-colors duration-200 group">
          Encomende
          <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </a>
      </div>
    </div>
  );
};

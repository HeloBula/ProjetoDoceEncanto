// src/pages/Home.tsx

import React from 'react';
// 1. IMPORTE as dependências necessárias (ProductCard e dados)
import { ProductCard } from '../components/ProductCard'; 
import { ContactSection } from '../components/ContactSection'; // Se ContactSection faz parte apenas da Home
import { products } from '../constants'; 
import type { Product } from '../types';

export const home: React.FC = () => {
  return (
    <>
    <section>
        <h1 className="bg-fuchsia-50 text-3xl md:text-4xl font-bold text-center text-zinc-800 mb-12"> Bem-vindos à nossa confeitaria. Espero que possamos adoçar sua vida!</h1>
        <img src="" alt="Logomarca da Confeitaria Doce Encanto" />
    </section>
      <section className="bg-fuchsia-50 py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-zinc-800 mb-12">
            Conheça algumas de nossas delícias!
          </h2>
          {/* 2. O código dos cards agora está aqui: */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
};

export default home;
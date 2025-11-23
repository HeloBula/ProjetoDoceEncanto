
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-800">
      <div className="container mx-auto px-6 lg:px-8 py-6">
        <p className="text-center text-gray-400">
          &copy; {new Date().getFullYear()} Doce Encanto. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

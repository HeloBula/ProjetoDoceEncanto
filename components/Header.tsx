import React from 'react';
import { Link } from 'react-router-dom'; 

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            {/* O 'to="/"' deve combinar com o path="/" no App.tsx */}
            <Link to="/" className="text-2xl font-display font-bold text-fuchsia-800">
              Doce Encanto
            </Link>
          </div>
          <nav className="hidden md:flex md:space-x-8">
            {/* O 'to="/sobre"' deve combinar com o path="/sobre" no App.tsx */}
            <Link 
              to="/sobre" 
              className="text-gray-600 hover:text-fuchsia-600 font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-fuchsia-500 font-sans"
            >
              Sobre
            </Link>
            <Link 
              to="/" 
              className="text-gray-600 hover:text-fuchsia-600 font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-fuchsia-500 font-sans"
            >
              Home
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
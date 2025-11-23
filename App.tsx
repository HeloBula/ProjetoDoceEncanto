import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Home from './pages/home';
import About from './pages/about';

const App: React.FC = () => {
  return (
    <div className="bg-fuchsia-50 min-h-screen font-sans flex flex-col">
      <Header /> 
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
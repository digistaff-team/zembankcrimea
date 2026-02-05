import React from 'react';
import Header from './components/Layout/Header';
import Hero from './components/Sections/Hero';
import Services from './components/Sections/Services';
import LandList from './components/Sections/LandList';
import About from './components/Sections/About';
import Blog from './components/Sections/Blog';
import Footer from './components/Layout/Footer';
import AIChatWidget from './components/AI/AIChatWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <Services />
        <LandList />
        <About />
        <Blog />
      </main>

      <Footer />
      
      {/* Floating AI Consultant */}
      <AIChatWidget />
    </div>
  );
};

export default App;
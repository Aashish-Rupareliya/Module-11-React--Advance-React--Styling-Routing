import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedCategories from './components/FeaturedCategories';

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturedCategories />
    </div>
  );
};

export default App;

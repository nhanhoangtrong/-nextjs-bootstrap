import React, { useState } from 'react';
import Hero from '@src/components/hero';
import Header from '@src/components/header';
import Pricing from '@src/components/pricing';
import Footer from '@src/components/footer';

const HomePage = () => {
  const [show, toggleModal] = useState(false);
  return (
    <div className="homepage">
      <Header />
      <Hero />
      <Pricing />
      <Footer />
    </div>
  );
};

export default HomePage;

'use client';

import React from 'react';
import Search from './Search';

// Rest of your component

const Hero = () => {
  return (
    <div className=' hero-home flex flex-col items-center justify-center text-center mt-60'>
      <h1 className=''>Embark on an AI-Powered Journey</h1>
      <h2 className=''>Explore the World through Intelligent Blogging</h2>
      <Search />
    </div>
  );
};

export default Hero;

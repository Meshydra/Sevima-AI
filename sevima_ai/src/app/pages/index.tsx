import React from 'react';
import Header from "../components/Header";
import Hero from "../components/homeComponents/Hero";
import AutoplayCarousel from '../components/homeComponents/AutoplayCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/index.css';

const Index = () => {
  return (
    <div className='main-home'>
      <main className='container'>
      <Header/>
      <Hero/>
    </main>    
    <AutoplayCarousel/>
    </div>
    
  );
};

export default Index;
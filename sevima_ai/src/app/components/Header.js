import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className='home-header'>
      <div className='logo-left'>
        <Image src='/black-sevima-logo.png' alt='logo' width={40} height={40} draggable={false} />
        <span className="logo-text">sevima</span>
      </div>
      <nav className='nav-middle'>
        <ul>
          <li className='nav-item'>
            <a href='#home' className='home-link'>Home</a>
          </li>
          <li className='nav-item'>
            <a href='#about' className='about-link'>About</a>
          </li>
          <li className='nav-item'>
            <a href='#support' className='support-link'>Support</a>
          </li>
        </ul>
      </nav>      
      <div className='user-right'>
          <a href='#'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display: "block", height: "20px", width: "20px", fill: "currentColor"}}>
              <path d="M3 12h18M3 6h18M3 18h18"></path>
            </svg> 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", height: "35px", width: "35px", fill: "#bbb"}}>
              <path d="M16 .7C7.56.7.7 7.56.7 16S7.56 31.3 16 31.3 31.3 24.44 31.3 16 24.44.7 16 .7zm0 28c-4.02 0-7.6-1.88-9.93-4.81a12.43 12.43 0 0 1 6.45-4.4A6.5 6.5 0 0 1 9.5 14a6.5 6.5 0 0 1 13 0 6.51 6.51 0 0 1-3.02 5.5 12.42 12.42 0 0 1 6.45 4.4A12.67 12.67 0 0 1 16 28.7z"></path>
            </svg>
          </a>
      </div>
    </header>
  );
};

export default Header;

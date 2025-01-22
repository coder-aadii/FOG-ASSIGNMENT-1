import React from 'react';
import '../assets/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img 
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTHYUtz7tAuXtVykN8JVrHZLW3JV4T4louoal2Pb55cLfhrjrQC" 
          alt="Logo" 
          className="logo-image"
        />
        Furniro
      </div>
      <nav>
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
      <div className="icons">
        <a href="/login">
          <img 
            src="https://img.icons8.com/?size=100&id=11727&format=png&color=000000" 
            alt="Login" 
            className="icon" 
          />
        </a>
        <a href="/search">
          <img 
            src="https://img.icons8.com/?size=100&id=132&format=png&color=000000" 
            alt="Search" 
            className="icon" 
          />
        </a>
        <a href="/wishlist">
          <img 
            src="https://img.icons8.com/?size=100&id=87&format=png&color=000000" 
            alt="Wishlist" 
            className="icon" 
          />
        </a>
        <a href="/cart">
          <img 
            src="https://img.icons8.com/?size=100&id=9671&format=png&color=000000" 
            alt="Cart" 
            className="icon" 
          />
        </a>
      </div>
    </header>
  );
};

export default Header;

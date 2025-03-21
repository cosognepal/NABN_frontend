import { useState } from 'react';
import logo from './logo.png';
import { Link } from "react-router-dom";
import './Header.css';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
          <span className="org-name">NABN</span>
        </Link>
      </div>
      
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={`hamburger-icon ${mobileMenuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      <nav className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/">HOME</a></li>
          <li><a href="/AboutUs">ABOUT US</a></li>
          <li><a href="/events">EVENTS</a></li>
          <li><a href="/team">TEAM</a></li>
          <li><a href="/contact">CONTACT</a></li>
          <li><a href="/donate">DONATE</a></li>

        </ul>
      </nav>
    </header>
  );
}

export default Header;
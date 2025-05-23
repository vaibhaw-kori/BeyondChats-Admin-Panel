import React from 'react';
import { FaBell, FaUserCircle, FaMoon, FaSun, FaBars } from 'react-icons/fa';
import './Header.css';

function Header({ theme, setTheme, toggleSidebar }) {
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <header className="header fade-in-down">
      <div className="left">
        <FaBars className="menu-btn" onClick={toggleSidebar} /> Dashboard
      </div>
      <div className="right">
        <button onClick={toggleTheme} className="theme-toggle hover-effect">
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
        <FaBell className="icon hover-effect" />
        <FaUserCircle className="icon hover-effect" />
      </div>
    </header>
  );
}

export default Header;
// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>My Portfolio</div>
      <ul style={styles.navLinks}>
        <li><a href="#about" className="nav-link">About</a></li>
        <li><a href="#projects" className="nav-link">Projects</a></li>
        <li><a href="#contact" className="nav-link">Contact</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    width: '100%',
    height: '60px',
    backgroundColor: 'rgba(0, 0, 0, 0.32)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 30px',
    zIndex: 1000,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.35)',
  },
  logo: {
    color: '#00bcd4',
    fontWeight: 'bold',
    fontSize: '25px',
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '25px',
    margin: 0,
    padding: 0,
    fontSize: '20px',
  },
};

export default Navbar;

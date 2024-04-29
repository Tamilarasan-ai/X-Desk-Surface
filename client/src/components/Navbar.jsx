import  { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isOpen &&
        event.target.closest('.navbar-collapse') === null &&
        event.target.closest('.navbar-toggler') === null
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="#">Your Logo</a>
      </div>
      <div className={`navbar-toggler ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </div>
      <div className={`navbar-collapse ${isOpen ? 'show' : ''}`}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#home" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link">Services</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
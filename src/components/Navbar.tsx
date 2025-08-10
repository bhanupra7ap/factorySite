import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const aboutTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const productsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleAboutMouseEnter = () => {
    if (aboutTimeoutRef.current) {
      clearTimeout(aboutTimeoutRef.current);
    }
    setIsAboutOpen(true);
  };

  const handleAboutMouseLeave = () => {
    aboutTimeoutRef.current = setTimeout(() => {
      setIsAboutOpen(false);
    }, 300); // 300ms delay
  };

  const handleProductsMouseEnter = () => {
    if (productsTimeoutRef.current) {
      clearTimeout(productsTimeoutRef.current);
    }
    setIsProductsOpen(true);
  };

  const handleProductsMouseLeave = () => {
    productsTimeoutRef.current = setTimeout(() => {
      setIsProductsOpen(false);
    }, 300); // 300ms delay
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Company Logo" className="logo-image" />
          <span className="logo-text">VARUNA POLYPACK</span>
        </Link>
        
        <div className="navbar-menu">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          
          <div 
            className="navbar-dropdown"
            onMouseEnter={handleAboutMouseEnter}
            onMouseLeave={handleAboutMouseLeave}
          >
            <span className="navbar-item dropdown-trigger">
              About <span className="dropdown-arrow">▼</span>
            </span>
            {isAboutOpen && (
              <div className="dropdown-menu">
                <Link to="/who-we-are" className="dropdown-item">
                  Who We Are
                </Link>
                <Link to="/certifications" className="dropdown-item">
                  Certifications
                </Link>
              </div>
            )}
          </div>
          
          <div 
            className="navbar-dropdown"
            onMouseEnter={handleProductsMouseEnter}
            onMouseLeave={handleProductsMouseLeave}
          >
            <span className="navbar-item dropdown-trigger">
              Products <span className="dropdown-arrow">▼</span>
            </span>
            {isProductsOpen && (
              <div className="dropdown-menu">
                <Link to="/fibc" className="dropdown-item">
                  FIBC
                </Link>
                <Link to="/wpp-sacks" className="dropdown-item">
                  WPP Sacks
                </Link>
                <Link to="/wpp-fabric" className="dropdown-item">
                  WPP Fabric
                </Link>
                <Link to="/non-woven-bag" className="dropdown-item">
                  Non Woven Shopping Bags
                </Link>
              </div>
            )}
          </div>
          
          <Link to="/quality" className="navbar-item">
            Quality
          </Link>
          
          <Link to="/facilities" className="navbar-item">
            Facilities
          </Link>
          
          <Link to="/contact" className="navbar-item">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

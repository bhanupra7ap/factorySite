import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
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

  const toggleMobileMenu = () => {
    setIsMobileOpen((s) => !s);
  };

  useEffect(() => {
    return () => {
      if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
      if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Company Logo" className="logo-image" />
          <span className="logo-text">VARUNA POLYPACK</span>
        </Link>
        
        <button
          className={`hamburger ${isMobileOpen ? 'active' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={isMobileOpen}
          onClick={toggleMobileMenu}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`navbar-menu ${isMobileOpen ? 'open' : ''}`}>
          <Link to="/" className="navbar-item">
            Home
          </Link>
          
          <div 
            className="navbar-dropdown"
            onMouseEnter={handleAboutMouseEnter}
            onMouseLeave={handleAboutMouseLeave}
          >
            <span
              className="navbar-item dropdown-trigger"
              onClick={() => setIsAboutOpen((s) => !s)}
            >
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
            <span
              className="navbar-item dropdown-trigger"
              onClick={() => setIsProductsOpen((s) => !s)}
            >
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
          
          <Link to="/quality" className="navbar-item" onClick={() => isMobileOpen && setIsMobileOpen(false)}>
            Quality
          </Link>
          
          <Link to="/facilities" className="navbar-item" onClick={() => isMobileOpen && setIsMobileOpen(false)}>
            Facilities
          </Link>

          <Link to="/contact" className="navbar-item" onClick={() => isMobileOpen && setIsMobileOpen(false)}>
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

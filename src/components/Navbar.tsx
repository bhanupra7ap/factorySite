import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const aboutTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const productsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const aboutTouchOpenedRef = useRef(false);
  const productsTouchOpenedRef = useRef(false);
  const aboutTouchClearRef = useRef<NodeJS.Timeout | null>(null);
  const productsTouchClearRef = useRef<NodeJS.Timeout | null>(null);

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

  // Open dropdown on single tap for touch devices.
  // We use onTouchStart to open the menu immediately and prevent the subsequent onClick
  // from toggling it closed (which causes the double-tap issue).
  const handleAboutTouchStart = (e: React.TouchEvent) => {
    // If already open, let the click toggle/close it as normal.
    if (!isAboutOpen) {
      e.preventDefault();
      setIsAboutOpen(true);
      // Mark that we opened via touch so the subsequent click doesn't toggle it closed.
      aboutTouchOpenedRef.current = true;
      if (aboutTouchClearRef.current) clearTimeout(aboutTouchClearRef.current);
      aboutTouchClearRef.current = setTimeout(() => {
        aboutTouchOpenedRef.current = false;
        aboutTouchClearRef.current = null;
      }, 700);
    }
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

  const handleProductsTouchStart = (e: React.TouchEvent) => {
    if (!isProductsOpen) {
      e.preventDefault();
      setIsProductsOpen(true);
      productsTouchOpenedRef.current = true;
      if (productsTouchClearRef.current) clearTimeout(productsTouchClearRef.current);
      productsTouchClearRef.current = setTimeout(() => {
        productsTouchOpenedRef.current = false;
        productsTouchClearRef.current = null;
      }, 700);
    }
  };

  const handleAboutClick = (e: React.MouseEvent) => {
    // If we just opened via touch, ignore the click that follows to avoid immediate toggle-close.
    if (aboutTouchOpenedRef.current) {
      aboutTouchOpenedRef.current = false;
      e.preventDefault();
      return;
    }
    setIsAboutOpen((s) => !s);
  };

  const handleProductsClick = (e: React.MouseEvent) => {
    if (productsTouchOpenedRef.current) {
      productsTouchOpenedRef.current = false;
      e.preventDefault();
      return;
    }
    setIsProductsOpen((s) => !s);
  };

  const toggleMobileMenu = () => {
    setIsMobileOpen((s) => !s);
  };

  // expose navbar height as a CSS variable when mounted or resized
  const navRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const setNavHeightVar = () => {
      if (navRef.current) {
        const h = navRef.current.getBoundingClientRect().height;
        document.documentElement.style.setProperty('--navbar-height', `${Math.ceil(h)}px`);
      }
    };
    setNavHeightVar();
    const ro = new ResizeObserver(setNavHeightVar);
    if (navRef.current) ro.observe(navRef.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    return () => {
      if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
      if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
      if (aboutTouchClearRef.current) clearTimeout(aboutTouchClearRef.current);
      if (productsTouchClearRef.current) clearTimeout(productsTouchClearRef.current);
    };
  }, []);

  // Track scroll to add a subtle floating/stuck effect
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > 8; // small threshold
      setIsScrolled(scrolled);
      setIsAtTop(window.scrollY <= 8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    // initial check
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // add/remove a root class to allow global CSS to react when navbar is fixed
  useEffect(() => {
    const className = 'navbar-is-fixed';
    const root = document.documentElement;
    if (isAtTop) {
      root.classList.add(className);
    } else {
      root.classList.remove(className);
    }
    return () => root.classList.remove(className);
  }, [isAtTop]);

  return (
  <nav ref={navRef} className={`navbar ${isAtTop ? 'full' : ''} ${!isAtTop && !isMobileOpen ? 'floating' : ''} ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Company Logo" className="logo-image" />
          {/* <span className="logo-text">VARUNA POLYPACK</span> */}
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
          {isMobileOpen && (
            <button
              className="mobile-close"
              aria-label="Close menu"
              onClick={() => setIsMobileOpen(false)}
            >
              ×
            </button>
          )}
          <Link to="/" className="navbar-item" onClick={() => isMobileOpen && setIsMobileOpen(false)}>
            Home
          </Link>
          
          <div 
            className="navbar-dropdown"
            onMouseEnter={handleAboutMouseEnter}
            onMouseLeave={handleAboutMouseLeave}
          >
            <span
              className="navbar-item dropdown-trigger"
              onClick={handleAboutClick}
              onTouchStart={handleAboutTouchStart}
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
              onClick={handleProductsClick}
              onTouchStart={handleProductsTouchStart}
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

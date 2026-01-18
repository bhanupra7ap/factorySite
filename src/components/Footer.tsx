import './Footer.css';
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact Information</h3>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span>+91-8604951812</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <span>sales@ariespacktech.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🌐</span>
              <span>www.ariespacktech.com</span>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Address</h3>
            <div className="address">
              <span className="contact-icon">📍</span>
              <div>
                <p>Varanasi, Uttar Pradesh</p>
                <p>India</p>
              </div>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Business Hours</h3>
            <div className="hours">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
        
        <div className="social-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://www.linkedin.com/company/111493268" className="social-link" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://facebook.com" className="social-link" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" className="social-link" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" className="social-link" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 Aries Packtech Pvt. Ltd.. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

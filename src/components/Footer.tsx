import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact Information</h3>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <span>info@factoryname.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🌐</span>
              <span>www.factoryname.com</span>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Address</h3>
            <div className="address">
              <span className="contact-icon">📍</span>
              <div>
                <p>123 Industrial Avenue</p>
                <p>Manufacturing District</p>
                <p>City, State 12345</p>
                <p>Country</p>
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
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">Facebook</a>
            <a href="#" className="social-link">Twitter</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 Varuna Polypack. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

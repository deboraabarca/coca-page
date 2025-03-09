// components/Footer.js

import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-cta">
          <h2>Are you prepared to collaborate with us?</h2>
          <a href="#lets-chat" className="btn btn-secondary">Lets chat with us!</a>
        </div>
        
        <div className="footer-info">
          <div className="contact-details">
            <p>1277 Rangkulum Jungle, Bandung, Indonesia</p>
            <p>info@yourweb.com</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2024 by Buy From Services</p>
          <div className="footer-links">
            <a href="#terms">Terms & Conditions</a>
            <a href="#privacy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
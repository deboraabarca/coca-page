// components/Footer.js

import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-cta">
          <h2>¿Etás preparado para colaborar con nosotros?</h2>
          <a href="#lets-chat" className="btn btn-secondary">
            ¡Chatea con nosotros!
          </a>
        </div>

        <div className="footer-info">
          <div className="contact-details">
            <p>1277 Rangkulum Jungle, Bandung, Indonesia</p>
            <p>info@yourweb.com</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 Comprar Servicios</p>
          <div className="footer-links">
            <a href="#terms">Terminos y Condiciones</a>
            <a href="#privacy">Politica de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

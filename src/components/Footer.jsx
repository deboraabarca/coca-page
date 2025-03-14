import { useEffect, useState } from "react";
import "../styles/Footer.css";
import "../styles/Animations/FooterAnimations.css";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector(".footer");
      if (footer) {
        const rect = footer.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className={`footer ${isVisible ? "is-visible" : ""}`}>
      <div className="container">
        <div className="footer-cta">
          <h2>¿Estás preparado para colaborar con nosotros?</h2>
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
            <a href="#terms">Términos y Condiciones</a>
            <a href="#privacy">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

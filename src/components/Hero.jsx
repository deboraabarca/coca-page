// components/HeroSection.js
import "../styles/Hero.css";
import phone from "../assets/icons/phone.png";
import mouse from "../assets/icons/mouse.png";
import {
  FaVideo,
  FaPhone,
  FaEnvelope,
  FaLongArrowAltDown,
} from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="chat-software-badge">Plataforma de chat</div>

        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Brinda soporte en tiempo real a tus clientes a través del chat
            </h1>
            <p>
              Un excelente software que te permite chatear desde cualquier lugar
              y en cualquier momento sin interrupciones
            </p>

            <div className="note-wrapper">
              <div className="floating-note">
                Toda investigación
                <br />
                comienza aquí
              </div>
              <FaLongArrowAltDown className="arrow-icon" />
            </div>

            <div className="hero-buttons">
              <a href="#get-started" className=" btn-started">
                Chatear ahora
              </a>
              <a href="#learn-more" className=" btn-learn">
                Leer más
              </a>
            </div>
          </div>
        </div>

        {/* Círculos de colores con íconos */}
        <div className="chat-icons-container">
          <div className="chat-icon-wrapper red-icon">
            <span className="chat-icon red">
              <FaVideo className="icon-inside" />
            </span>
          </div>
          <div className="chat-icon-wrapper purple-icon">
            <span className="chat-icon purple">
              <FaPhone className="icon-inside" />
            </span>
          </div>
          <div className="chat-icon-wrapper email-icon">
            <span className="chat-icon email">
              <FaEnvelope className="icon-inside" />
            </span>
          </div>
        </div>

        <div className="contact-info">
          <div className="phone">
            <img src={phone} alt="Icono de teléfono" className="icon" />
            <span>+182 (283) 343-23-10</span>
          </div>
          <div className="hours">
            <img src={mouse} alt="mouse" className="icon" />
            <span>DESPLAZA HACIA ABAJO</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;

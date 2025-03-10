// components/HeroSection.js
import '../styles/Hero.css';
import phone from '../assets/icons/phone.png';
import mouse from '../assets/icons/mouse.png';
import { FaVideo, FaComment, FaHeadset, FaEnvelope } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="chat-software-badge">
          Chat software
        </div>
        
        <div className="hero-content">
          <div className="hero-text">
            <h1>Provide real-time support through chat for your customers</h1>
            <p>Great software that allows you to chat from any place at any time without any interruption</p>
            
            <div className="note-wrapper">
              <div className="floating-note">All research<br />start from here</div>
              <div className="arrow-down"></div>
            </div>
            
            <div className="hero-buttons">
              <a href="#get-started" className="btn btn-started">Chatting Now</a>
              <a href="#learn-more" className="btn btn-outline">Learn More</a>
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
          <div className="chat-icon-wrapper yellow-icon">
            <span className="chat-icon yellow">
              <FaComment className="icon-inside" />
            </span>
          </div>
          <div className="chat-icon-wrapper purple-icon">
            <span className="chat-icon purple">
              <FaHeadset className="icon-inside" />
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
            <img src={phone} alt="Phone Icon" className="icon" />
            <span>+182 (283) 343-23-10</span>
          </div>
          <div className="hours">
            <img src={mouse} alt="mouse" className="icon" />
            <span>SCROLL DOWN</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
// components/HeroSection.js
import '../styles/Hero.css';
import phone from '../assets/icons/phone.png';
import mouse from '../assets/icons/mouse.png';
import { FaVideo, FaComment, FaHeadset } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="badge">Just launched</div>
        
        <div className="hero-content">
          <div className="hero-text">
            <h1>Provide real-time support through chat for your customers</h1>
            <p>Give a software that allows you to chat with your customers directly when needed, in real-time</p>
            
            <div className="hero-buttons">
              <a href="#get-started" className="btn btn-started">Get Started</a>
              <a href="#learn-more" className="btn btn-outline">Learn More</a>
            </div>
          </div>
          
          <div className="hero-image">
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
            </div>
          </div>
        </div>
        
        <div className="contact-info">
          <div className="phone">
            <img src={phone} alt="Phone Icon" className="icon" />
            <span>+00 (000) 123-45-67</span>
          </div>
          <div className="hours">
            <img src={mouse} alt="mouse" className="icon" />
            <span>SCROOL DOWN</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
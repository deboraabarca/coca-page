// components/HeroSection.js
import '../styles/Hero.css';
 // Add this image to your assets

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
              <a href="#get-started" className="btn btn-secondary">Get Started</a>
              <a href="#learn-more" className="btn btn-outline">Learn More</a>
            </div>
          </div>
          
          <div className="hero-image">
            {/* Placeholder for your chat UI illustration */}
            <div className="chat-icons">
              <span className="chat-icon red"></span>
              <span className="chat-icon yellow"></span>
              <span className="chat-icon purple"></span>
            </div>
          </div>
        </div>
        
        <div className="contact-info">
          <div className="phone">
            <span className="icon">📞</span>
            <span>+00 (000) 123-45-67</span>
          </div>
          <div className="hours">
            <span className="icon">🕒</span>
            <span>WORKING HOURS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

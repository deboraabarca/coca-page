// components/MultiChannelSection.js
import '../styles/Multichannel.css';
import chatUIImage from '../assets/resources/multi-channel component.png'; // Add this image to your assets

const MultiChannelSection = () => {
  return (
    <section className="multi-channel-section">
      <div className="container">
        <div className="multi-channel-content">
          <div className="multi-channel-text">
            <h2>Access a unified multi-channel messaging solution in one place</h2>
            <p>Connect with your customers across multiple platforms through one interface. Keep an eye on conversations across all your preferred channels with ease.</p>
            
            <ul className="feature-list">
              <li>Engage in real-time chats with visitors, prospects, and customers.</li>
              <li>Save and personalize conversations without limitations.</li>
              <li>Participate in contextual chat conversations on the go.</li>
            </ul>
          </div>
          
          <div className="multi-channel-image">
            <img src={chatUIImage} alt="Multi-channel interface" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiChannelSection;
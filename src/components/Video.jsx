// components/VideoSection.js
import videoImage from '../assets/video-section.png'; // Add this image to your assets

const VideoSection = () => {
  return (
    <section className="video-section">
      <div className="container">
        <div className="video-content">
          <div className="video-text">
            <h2>Craft a communication strategy using live video chat</h2>
            <p>Video conferencing enhances productivity and creates collaborative, making it a modern tool for effective business communication.</p>
          </div>
          
          <div className="video-container">
            <div className="video-placeholder">
              <img src={videoImage} alt="Video chat" />
              <button className="play-button">
                <span className="play-icon">▶</span>
              </button>
            </div>
            <div className="chat-message">
              <div className="message-avatar">
                <img src="/assets/avatar.jpg" alt="Avatar" />
              </div>
              <div className="message-content">
                <p className="message-name">Martha Stanley</p>
                <p className="message-text">Hi John, Thank you for reaching out about our service today.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
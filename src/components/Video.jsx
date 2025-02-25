// components/VideoSection.js
import '../styles/Video.css';
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
            </div>
            <div className="chat-message">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
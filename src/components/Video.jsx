// components/VideoSection.js
import "../styles/Video.css";
import videoImage from "../assets/resources/video-section.png"; // Add this image to your assets

const VideoSection = () => {
  return (
    <section className="video-section">
      <div className="container">
        <div className="video-content">
          <div className="video-text">
            <h2>Estrategia de comunicación utilizando videochat en vivo</h2>
            <p>
              El uso de videoconferencias mejora la productividad y crea un
              entorno colaborativo, convirtiéndolo en una herramienta moderna
              para una comunicación empresarial efectiva.
            </p>
          </div>

          <div className="video-container">
            <div className="video-placeholder">
              <img src={videoImage} alt="Video chat" />
            </div>
            <div className="chat-message"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

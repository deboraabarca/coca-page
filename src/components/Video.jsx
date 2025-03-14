import { useEffect, useRef } from "react";
import "../styles/Video.css";
import "../styles/Animations/VideoAnimations.css"; // Importa el archivo de animaciones
import videoImage from "../assets/resources/video-section.png";

const VideoSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");

            // Desconectar el observer después de activarse
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentSectionRef = sectionRef.current;
    if (currentSectionRef) {
      sectionObserver.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        sectionObserver.unobserve(currentSectionRef);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="video-section">
      <div className="container">
        <div className="video-content">
          <div className="video-text">
            <h2 className="fade-in-left">
              Estrategia de comunicación utilizando videochat en vivo
            </h2>
            <p className="fade-in-left">
              El uso de videoconferencias mejora la productividad y crea un
              entorno colaborativo, convirtiéndolo en una herramienta moderna
              para una comunicación empresarial efectiva.
            </p>
          </div>

          <div className="video-container fade-in-right">
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

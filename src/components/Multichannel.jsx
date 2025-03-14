import { useEffect, useRef, useState } from "react";
import "../styles/Multichannel.css";
import "../styles/Animations/MultichannelAnimations.css";
import chatUIImage from "../assets/resources/multi-channel component.png";

const MultiChannelSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const checkIfVisible = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const isInViewport =
        rect.top <=
          (window.innerHeight || document.documentElement.clientHeight) *
            0.75 && rect.bottom >= 0;

      if (isInViewport && !isVisible) {
        setIsVisible(true);
      }
    };

    // Ejecutar al cargar y al hacer scroll
    checkIfVisible();
    window.addEventListener("scroll", checkIfVisible);

    // Limpieza del event listener
    return () => {
      window.removeEventListener("scroll", checkIfVisible);
    };
  }, [isVisible]);

  return (
    <section
      className={`multi-channel-section animate-section ${
        isVisible ? "is-visible" : ""
      }`}
      ref={sectionRef}
    >
      <div className="container">
        <div className="multi-channel-content">
          <div className="multi-channel-text">
            <h2>
              Accede a una solución unificada de mensajería multicanal en un
              solo lugar
            </h2>
            <p>
              Conéctate con tus clientes a través de múltiples plataformas desde
              una sola interfaz. Supervisa fácilmente las conversaciones en
              todos tus canales preferidos.
            </p>

            <ul className="feature-list">
              <li>
                Interactúa en chats en tiempo real con visitantes, prospectos y
                clientes.
              </li>
              <li>Guarda y personaliza conversaciones sin limitaciones.</li>
              <li>
                Participa en conversaciones contextuales en cualquier momento y
                lugar.
              </li>
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

import { useEffect, useRef } from "react";
import "../styles/Interface.css";
import "../styles/Animations/InterfaceAnimations.css"; // Importamos las animaciones
import interfaceImage from "../assets/resources/interface.png";

const InterfaceSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
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
    <section ref={sectionRef} className="interface-section">
      <div className="container">
        <div className="interface-content">
          <div className="interface-image fade-in-left">
            <img src={interfaceImage} alt="Chat interface" />
          </div>

          <div className="interface-text fade-in-right">
            <h2>Una interfaz ideal para un soporte rápido y sin código</h2>
            <p>
              Nuestra plataforma intuitiva te permite ofrecer la mejor
              experiencia al cliente al instante, con una interfaz limpia y
              soporte inmediato.
            </p>
            <p>
              Comunícate de manera efectiva con los clientes, intégrate sin
              problemas con tu sitio web para un soporte eficiente y brinda una
              experiencia agradable a tus usuarios.
            </p>

            <a href="#learn-more" className="btn btn-primary scale-up">
              Leer más
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterfaceSection;

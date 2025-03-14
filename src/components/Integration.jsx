// components/IntegrationSection.js
import { useEffect, useRef } from "react";
import "../styles/Integration.css";
import "../styles/Animations/IntegrationAnimations.css"; // Importamos el nuevo archivo de animaciones
import slack from "../assets/icons/slack.png";
import visual from "../assets/icons/visual.png";
import spotify from "../assets/icons/spotify.png";
import dropbox from "../assets/icons/dropbox.png";
import mailchimp from "../assets/icons/mailchimp.png";
import shopify from "../assets/icons/shopify.png";
import figma from "../assets/icons/figma.png";
import cromo from "../assets/icons/cromo.png";
import firefox from "../assets/icons/firefox.png";
import vimeo from "../assets/icons/vimeo.png";
import apple from "../assets/icons/apple.png";

const IntegrationSection = () => {
  const sectionRef = useRef(null);
  const logosRef = useRef(null);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");

            // Activar la animación de los logos con un pequeño retraso
            setTimeout(() => {
              if (logosRef.current) {
                const logos =
                  logosRef.current.querySelectorAll(".logo-placeholder");
                logos.forEach((logo, index) => {
                  setTimeout(() => {
                    logo.classList.add("visible");
                  }, index * 100); // Cada logo aparece con 100ms de diferencia
                });
              }
            }, 300);

            // Desconectar el observer una vez que se ha activado
            sectionObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
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
    <section className="integration-section animated-section" ref={sectionRef}>
      <div className="container">
        <h2 className="text-center animated-title">
          Integración sin esfuerzo con tus herramientas preferidas
        </h2>

        <div className="integration-logos" ref={logosRef}>
          <img
            src={slack}
            alt="slack"
            className="logo-placeholder animated-logo"
          />
          <img
            src={visual}
            alt="visual"
            className="logo-placeholder animated-logo"
          />
          <img
            src={spotify}
            alt="spotify"
            className="logo-placeholder animated-logo"
          />
          <img
            src={dropbox}
            alt="dropbox"
            className="logo-placeholder animated-logo"
          />
          <img
            src={mailchimp}
            alt="mailchimp"
            className="logo-placeholder animated-logo"
          />
          <img
            src={shopify}
            alt="shopify"
            className="logo-placeholder animated-logo"
          />
          <img
            src={figma}
            alt="figma"
            className="logo-placeholder animated-logo"
          />
          <img
            src={cromo}
            alt="cromo"
            className="logo-placeholder animated-logo"
          />
          <img
            src={firefox}
            alt="firefox"
            className="logo-placeholder animated-logo"
          />
          <img
            src={vimeo}
            alt="vimeo"
            className="logo-placeholder animated-logo"
          />
          <img
            src={apple}
            alt="apple"
            className="logo-placeholder animated-logo"
          />
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;

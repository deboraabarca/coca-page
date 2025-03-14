import { useEffect, useRef, useState } from "react";
import "../styles/Pricing.css";
import "../styles/Animations/PricingAnimatios.css";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");
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

    checkIfVisible();
    window.addEventListener("scroll", checkIfVisible);

    return () => {
      window.removeEventListener("scroll", checkIfVisible);
    };
  }, [isVisible]);

  return (
    <section
      className={`pricing-section animate-section ${
        isVisible ? "is-visible" : ""
      }`}
      ref={sectionRef}
    >
      <div className="container">
        <h2 className="pricing-title">Pricing Plans</h2>
        <p className="pricing-description">
          Una solución web completa y lista para implementar, sin pedir datos de
          tu tarjeta. Disfruta de 14 días gratis con todas nuestras funciones
          Premium en cualquier plan que elijas.
        </p>
        <div className="billing-toggle">
          <button
            className={`toggle-btn ${
              billingCycle === "monthly" ? "active" : ""
            }`}
            onClick={() => setBillingCycle("monthly")}
          >
            Mensual
          </button>
          <button
            className={`toggle-btn ${
              billingCycle === "yearly" ? "active" : ""
            }`}
            onClick={() => setBillingCycle("yearly")}
          >
            Anual
          </button>
        </div>
        <div className="pricing-plans">
          <div className="pricing-card silver">
            <h3 className="plan-title">PLATA</h3>
            <h3 className="price">
              $50<span>/mes</span>
            </h3>
            <ul className="features-list">
              <li>Sin Descuento</li>
              <li>Soporte Básico</li>
              <li>Sin anuncios publicitarios</li>
              <li>Estilo de diseño</li>
              <li>Biblioteca de componentes</li>
              <li>Todos los enlaces limitados</li>
              <li>Plataforma de análisis propia</li>
              <li>Soporte por chat</li>
              <li>Optimización de hashtags</li>
              <li>Usuarios ilimitados</li>
            </ul>
            <a href="#choose-plan" className="btn btn-outline">
              Elegir Plan
            </a>
          </div>

          <div className="pricing-card featured">
            <span className="popular-badge">MÁS POPULAR</span>
            <h3 className="plan-title">GOLD</h3>
            <h3 className="price">
              $100<span>/mes</span>
            </h3>
            <ul className="features-list">
              <li>Sin descuento</li>
              <li>Soporte básico</li>
              <li>Sin anuncios publicitarios</li>
              <li>Estilo de diseño</li>
              <li>Biblioteca de componentes</li>
              <li>Todos los enlaces limitados</li>
              <li>Plataforma de análisis propia</li>
              <li>Soporte por chat</li>
              <li>Optimización de hashtags</li>
              <li>Usuarios ilimitados</li>
            </ul>
            <a href="#choose-plan" className="btn btn-gold">
              Elegir Plan
            </a>
          </div>

          <div className="pricing-card premium">
            <h3 className="plan-title">PREMIUM</h3>
            <h3 className="price">
              $150<span>/mes</span>
            </h3>
            <ul className="features-list">
              <li>Sin descuento</li>
              <li>Soporte básico</li>
              <li>Sin anuncios publicitarios</li>
              <li>Estilo de diseño</li>
              <li>Biblioteca de componentes</li>
              <li>Todos los enlaces limitados</li>
              <li>Plataforma de análisis propia</li>
              <li>Soporte por chat</li>
              <li>Optimización de hashtags</li>
              <li>Usuarios ilimitados</li>
            </ul>
            <a href="#choose-plan" className="btn btn-outline">
              Elegir Plan
            </a>
          </div>
        </div>

        <div className="free-trial-cta">
          <h3>
            Regístrate hoy para tu prueba gratuita e incorpora chat en vivo en
            tu sitio web.
          </h3>
          <p>
            ¡Desbloquea el poder de la interacción con clientes en tiempo real!
            ¡Comienza tu prueba gratuita e integra chat en vivo en tu sitio web
            hoy mismo!
          </p>
          <div className="app-buttons">
            <a href="#play-store" className="app-btn">
              <FaGooglePlay className="app-icon" />
              <span>
                OBTENLO EN
                <br />
                Google Play
              </span>
            </a>
            <a href="#app-store" className="app-btn">
              <FaApple className="app-icon" />
              <span>
                DESCÁRGALO EN LA
                <br />
                App Store
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

import { useEffect, useRef } from "react";
import "../styles/Order.css";
import "../styles/Animations/OrderAnimations.css"; // Importamos las animaciones
import ordersImage from "../assets/resources/order-interface.png";

const OrdersSection = () => {
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
    <section ref={sectionRef} className="orders-section">
      <div className="container">
        <div className="orders-content">
          <div className="orders-text fade-in-left">
            <h2>Recibe pedidos directos de tus clientes</h2>
            <p>
              Permite que tus clientes realicen pedidos directamente a través
              del chat, facilitándoles obtener lo que desean, cuando lo desean.
              Con un poco de ayuda guiada de un humano real.
            </p>

            <div className="stats">
              <div className="stat-item scale-up">
                <h3>9.3K+</h3>
                <p>Usuarios activos mensuales</p>
              </div>
              <div className="stat-item scale-up">
                <h3>8M+</h3>
                <p>Chats en los últimos 30 días</p>
              </div>
            </div>
          </div>

          <div className="orders-image fade-in-right">
            <img src={ordersImage} alt="Orders interface" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrdersSection;

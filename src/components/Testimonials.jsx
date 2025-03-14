import { useEffect, useRef } from "react";
import "../styles/Testimonials.css";
import "../styles/Animations/TestimonialsAnimations.css"; // Importamos las animaciones
import avatar1 from "../assets/avatars/avatar1.jpg";
import avatar2 from "../assets/avatars/avatar2.jpg";
import avatar3 from "../assets/avatars/avatar3.jpg";

const TestimonialsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
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
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Jennifer Albert",
      avatar: avatar1,
      text: "Usar esta herramienta para ayudar a una startup como la mía hizo que las cosas fueran más fluidas y menos consumidoras de tiempo, y todas las funciones interactivas son fáciles de usar.",
      rating: 5,
    },
    {
      id: 2,
      name: "Jonathan Albert",
      avatar: avatar2,
      text: "Interfaz increíble, elegante y refinada. El diseño es limpio y acogedor con su equipo de soporte. Siento que realmente se preocupan por nuestro negocio.",
      rating: 5,
    },
    {
      id: 3,
      name: "Jonathan Albert",
      avatar: avatar3,
      text: "La integración fue súper fácil con Mixpanel. La combinación de tecnología súper elegante mantiene a los visitantes muy comprometidos.",
      rating: 5,
    },
  ];

  return (
    <section ref={sectionRef} className="testimonials-section">
      <div className="container fade-in">
        <h2 className="text-center">
          Ofrecer a nuestros usuarios una gran experiencia
        </h2>
        <p className="text-center subtitle">
          Los clientes que encuentran un alto nivel de servicio siempre
          comparten la experiencia positiva con otros clientes potenciales
        </p>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div className="testimonial-card scale-up" key={testimonial.id}>
              <div className="testimonial-avatar">
                <img src={testimonial.avatar} alt={testimonial.name} />
              </div>
              <h4>{testimonial.name}</h4>
              <p>{testimonial.text}</p>
              <div className="rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">
                    ★
                  </span>
                ))}
                <span className="rating-value">
                  {testimonial.rating.toFixed(1)}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination fade-in">
          <span className="pagination-dot active"></span>
          <span className="pagination-dot"></span>
          <span className="pagination-dot"></span>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

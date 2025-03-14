// components/MultiChannelSection.js
import "../styles/Multichannel.css";
import chatUIImage from "../assets/resources/multi-channel component.png"; // Add this image to your assets

const MultiChannelSection = () => {
  return (
    <section className="multi-channel-section">
      <div className="container">
        <div className="multi-channel-content">
          <div className="multi-channel-text">
            <h2>
              Accede a una solución unificada de mensajería multicanal en un solo lugar
            </h2>
            <p>
              Conéctate con tus clientes a través de múltiples plataformas desde una sola 
              interfaz. Supervisa fácilmente las conversaciones en todos tus canales preferidos.
            </p>

            <ul className="feature-list">
              <li>
                Interactúa en chats en tiempo real con visitantes, prospectos y clientes.
              </li>
              <li>Guarda y personaliza conversaciones sin limitaciones.</li>
              <li>Participa en conversaciones contextuales en cualquier momento y lugar.</li>
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

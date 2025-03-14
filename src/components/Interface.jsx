// components/InterfaceSection.js 
import '../styles/Interface.css';
import interfaceImage from '../assets/resources/interface.png'; 

const InterfaceSection = () => {
  return (
    <section className="interface-section">
      <div className="container">
        <div className="interface-content">
          <div className="interface-image">
            <img src={interfaceImage} alt="Chat interface" />
          </div>
          
          <div className="interface-text">
            <h2>Una interfaz ideal para un soporte rápido y sin código</h2>
            <p>Nuestra plataforma intuitiva te permite ofrecer la mejor experiencia al cliente al instante, con una interfaz limpia y soporte inmediato.</p>
            <p>Comunícate de manera efectiva con los clientes, intégrate sin problemas con tu sitio web para un soporte eficiente y brinda una experiencia agradable a tus usuarios.</p>

            <a href="#learn-more" className="btn btn-primary">Leer más</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterfaceSection;
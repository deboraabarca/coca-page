// components/InterfaceSection.js 
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
            <h2>An ideal interface for swift, code-free support</h2>
            <p>Our intuitive platform allows you to provide the best customer experience instantly, with nothing but clean UI and instant support.</p>
            <p>Communicate effectively with customers, integrate seamlessly with your website for efficient support, and provide a delightful experience for your users.</p>
            <a href="#learn-more" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterfaceSection;
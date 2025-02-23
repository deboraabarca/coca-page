
import '../styles/Features.css';

const Features = () => {
  const features = [
    {
      title: "Access a unified multi-channel messaging hub",
      description: "Access unified multi-channel messaging hub in one place. Connect all your communication channels efficiently.",
      image: "/images/unified-messaging.png",
      align: "left"
    },
    {
      title: "Chat & communication strategy using one inbox",
      description: "Streamline your team's workflow with our unified inbox solution. Handle all conversations efficiently.",
      image: "/images/team-chat.png",
      align: "right"
    },
    {
      title: "Get direct notes from your customers",
      description: "Receive feedback and notes directly from your customers to improve your service quality.",
      image: "/images/customer-feedback.png",
      align: "left"
    }
  ];

  return (
    <section className="features">
      <div className="container">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className={`feature-item ${feature.align === 'right' ? 'feature-item--reverse' : ''}`}
          >
            <div className="feature-item__content">
              <h2 className="feature-item__title">{feature.title}</h2>
              <p className="feature-item__description">{feature.description}</p>
            </div>
            <div className="feature-item__image-container">
              <img 
                src={feature.image} 
                alt={feature.title} 
                className="feature-item__image"
              />
              <div className="feature-item__image-decoration"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
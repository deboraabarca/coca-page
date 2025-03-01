// components/PricingSection.js
import '../styles/Pricing.css';
const PricingSection = () => {
  return (
    <section className="pricing-section">
      <div className="container">
        <h2 className="text-center">Pricing Plans</h2>
        <p className="text-center subtitle">Choose the plan that works best for your business needs</p>
        
        <div className="plan-toggle">
          <button className="active">Monthly</button>
          <button>Yearly</button>
        </div>
        
        <div className="pricing-plans">
          <div className="pricing-card">
            <h3>$50<span>/month</span></h3>
            <ul className="features-list">
              <li>5 TB storage</li>
              <li>Basic Support</li>
              <li>Real-time chat</li>
              <li>Single-page chat</li>
              <li>Visitor tracking</li>
              <li>Chat widget options</li>
              <li>File transfer options</li>
              <li>Contact manager</li>
              <li>Widgets</li>
            </ul>
            <a href="#choose-plan" className="btn btn-outline">Choose plan</a>
          </div>
          
          <div className="pricing-card featured">
            <span className="popular-badge">MOST POPULAR</span>
            <h3>$100<span>/month</span></h3>
            <ul className="features-list">
              <li>All features from Basic</li>
              <li>Team Support</li>
              <li>Video chats</li>
              <li>Team Support</li>
              <li>Customized design</li>
              <li>Multiple pages</li>
              <li>Google Maps</li>
              <li>File uploads</li>
              <li>Custom forms</li>
              <li>Customer support</li>
            </ul>
            <a href="#choose-plan" className="btn btn-secondary">Choose plan</a>
          </div>
          
          <div className="pricing-card">
            <h3>$150<span>/month</span></h3>
            <ul className="features-list">
              <li>All features from Pro</li>
              <li>Basic Support</li>
              <li>Video chats</li>
              <li>Single-page chat</li>
              <li>Visitor tracking</li>
              <li>Chat widget options</li>
              <li>File transfer options</li>
              <li>Contact manager</li>
              <li>Custom widgets</li>
            </ul>
            <a href="#choose-plan" className="btn btn-outline">Choose plan</a>
          </div>
        </div>
        
        <div className="free-trial-cta">
          <h3>Sign up for your free trial today and incorporate live chat on your website.</h3>
          <p>Unlock the Power of Real-Time Customer Engagement! Plan Your Trial and Integrate Live Chat on Your Website Today!</p>
          <div className="app-buttons">
            <a href="#app-store" className="app-btn">App Store</a>
            <a href="#play-store" className="app-btn">Play Store</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
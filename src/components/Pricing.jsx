// components/PricingSection.js
import '../styles/Pricing.css';
import { FaGooglePlay, FaApple } from 'react-icons/fa';

const PricingSection = () => {
  return (
    <section className="pricing-section">
      <div className="container">
        <div className="pricing-plans">
          <div className="pricing-card silver">
            <h3 className="plan-title">SILVER</h3>
            <h3 className="price">$50<span>/month</span></h3>
            <ul className="features-list">
              <li>No Discount</li>
              <li>Basic Support</li>
              <li>Ads Banner Free</li>
              <li>Design Style</li>
              <li>Component Library</li>
              <li>All limited links</li>
              <li>Own analytics platform</li>
              <li>Chat support</li>
              <li>Optimize hashtags</li>
              <li>Unlimited users</li>
            </ul>
            <a href="#choose-plan" className="btn btn-outline">Choose plan</a>
          </div>
          
          <div className="pricing-card featured">
            <span className="popular-badge">MOST POPULAR</span>
            <h3 className="plan-title">GOLD</h3>
            <h3 className="price">$100<span>/month</span></h3>
            <ul className="features-list">
              <li>No Discount</li>
              <li>Basic Support</li>
              <li>Ads Banner Free</li>
              <li>Design Style</li>
              <li>Component Library</li>
              <li>All limited links</li>
              <li>Own analytics platform</li>
              <li>Chat support</li>
              <li>Optimize hashtags</li>
              <li>Unlimited users</li>
            </ul>
            <a href="#choose-plan" className="btn btn-gold">Choose plan</a>
          </div>
          
          <div className="pricing-card premium">
            <h3 className="plan-title">PREMIUM</h3>
            <h3 className="price">$150<span>/month</span></h3>
            <ul className="features-list">
              <li>No Discount</li>
              <li>Basic Support</li>
              <li>Ads Banner Free</li>
              <li>Design Style</li>
              <li>Component Library</li>
              <li>All limited links</li>
              <li>Own analytics platform</li>
              <li>Chat support</li>
              <li>Optimize hashtags</li>
              <li>Unlimited users</li>
            </ul>
            <a href="#choose-plan" className="btn btn-outline">Choose plan</a>
          </div>
        </div>
        
        <div className="free-trial-cta">
          <h3>Sign up for your free trial today and incorporate live chat on your website.</h3>
          <p>Unlock the Power of Real-Time Customer Engagement! Start Your Free Trial and Integrate Live Chat on Your Website Today!</p>
          <div className="app-buttons">
            <a href="#play-store" className="app-btn">
              <FaGooglePlay className="app-icon" />
              <span>GET IT ON<br />Google Play</span>
            </a>
            <a href="#app-store" className="app-btn">
              <FaApple className="app-icon" />
              <span>Download on the<br />App Store</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
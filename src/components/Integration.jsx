// components/IntegrationSection.js
import "../styles/Integration.css";
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
  return (
    <section className="integration-section">
      <div className="container">
        <h2 className="text-center">
          Effortless integration with your preferred tools
        </h2>

        <div className="integration-logos">
          <img src={slack} alt="slack" className="logo-placeholder" />
          <img src={visual} alt="visual" className="logo-placeholder" />
          <img src={spotify} alt="spotify" className="logo-placeholder" />
          <img src={dropbox} alt="dropbox" className="logo-placeholder" />
          <img src={mailchimp} alt="mailchimp" className="logo-placeholder" />
          <img src={shopify} alt="shopify" className="logo-placeholder" />
          <img src={figma} alt="figma" className="logo-placeholder" />
          <img src={cromo} alt="cromo" className="logo-placeholder" />
          <img src={firefox} alt="firefox" className="logo-placeholder" />
          <img src={vimeo} alt="vimeo" className="logo-placeholder" />
          <img src={apple} alt="apple" className="logo-placeholder" />
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;

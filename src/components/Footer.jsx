// components/FooterCTA.js


const FooterCTA = () => {
  return (
    <section className="footer-cta-section">
      <div className="container">
        <div className="cta-content">
          <h2>Sign up for your free trial today and incorporate live chat on your website.</h2>
          <p>Unlock the Power of Real-Time Customer Engagement! Plan Your Trial and Integrate Live Chat on Your Website Today!</p>
          
          <div className="app-download">
            <a href="#app-store" className="app-button">
              <img src="/assets/app-store.png" alt="App Store" />
            </a>
            <a href="#play-store" className="app-button">
              <img src="/assets/play-store.png" alt="Play Store" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
// src/components/Navbar/Navbar.jsx
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container container">
        <div className="navbar__logo">
          <img src="/logo.svg" alt="Logo" className="navbar__logo-img" />
        </div>
        <button className="button button-primary navbar__cta">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
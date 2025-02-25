import '../styles/Header.css';
import logo from '../assets/logo-seccion-Header.png'; 

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src={logo} alt="Coca" />
          </div>
          
          <nav className="main-nav">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#team">Our Team</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
          </nav>
          
          <div className="header-buttons">
            <a href="#login" className="login-btn">Login</a>
            <a href="#register" className="btn btn-secondary register-btn">Register</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
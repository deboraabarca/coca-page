import '../styles/Header.css';
import logo from '../assets/resources/logo-seccion-Header.png'; 

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
              <li><a href="#home">Inicio</a></li>
              <li><a href="#about">Sobre nosotros</a></li>
              <li><a href="#team">Nuestro equipo</a></li>
              <li><a href="#pricing">Precios</a></li>
            </ul>
          </nav>
          
          <div className="header-buttons">
            <a href="#login" className="login-btn">Iniciar sesión</a>
            <a href="#register" className="btn btn-secondary register-btn">Registrarse</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
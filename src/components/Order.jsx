// components/OrdersSection.js
import "../styles/Order.css";
import ordersImage from "../assets/resources/order-interface.png";

const OrdersSection = () => {
  return (
    <section className="orders-section">
      <div className="container">
        <div className="orders-content">
          <div className="orders-text">
            <h2>Recibe pedidos directos de tus clientes</h2>
            <p>
              Permite que tus clientes realicen pedidos directamente a través
              del chat, facilitándoles obtener lo que desean, cuando lo desean.
              Con un poco de ayuda guiada de un humano real.
            </p>

            <div className="stats">
              <div className="stat-item">
                <h3>9.3K+</h3>
                <p>Usuarios activos mensuales</p>
              </div>
              <div className="stat-item">
                <h3>8M+</h3>
                <p>Chats en los últimos 30 días</p>
              </div>
            </div>
          </div>

          <div className="orders-image">
            <img src={ordersImage} alt="Orders interface" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrdersSection;

// components/OrdersSection.js
import '../styles/Order.css';
import ordersImage from '../assets/order-interface.png'; 

const OrdersSection = () => {
  return (
    <section className="orders-section">
      <div className="container">
        <div className="orders-content">
          <div className="orders-text">
            <h2>Get direct orders from your customers</h2>
            <p>Allow your customers to place orders directly through chat, making it easier for them to get what they want, when they want. With a bit of guided help from a real human.</p>
            
            <div className="stats">
              <div className="stat-item">
                <h3>9.3K+</h3>
                <p>Monthly Active Users</p>
              </div>
              <div className="stat-item">
                <h3>8M+</h3>
                <p>Chats in Last 30 Days</p>
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
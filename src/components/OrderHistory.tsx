import React from 'react';
import { Order } from '../types';

interface OrderHistoryProps {
  orders: Order[];
}

const OrderHistory: React.FC<OrderHistoryProps> = ({ orders }) => {
  return (
    <section className="order-history">
      <div className="container">
        <h2 className="section-title">Your Recent Orders</h2>
        <div className="order-grid">
          {orders.map((order) => (
            <div className="order-card" key={order.id}>
              <div>
                <div className="order-id">{order.id}</div>
                <div style={{ color: '#666', fontSize: '0.9rem', marginTop: '5px' }}>
                  {order.date} • {order.items.reduce((acc, item) => acc + item.quantity, 0)} items
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: '800', fontSize: '1.2rem', marginBottom: '5px' }}>₹{order.total}</div>
                <span className="order-status">{order.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrderHistory;

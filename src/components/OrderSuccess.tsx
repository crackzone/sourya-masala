import React from 'react';

interface OrderSuccessProps {
  orderId: string;
  onContinue: () => void;
}

const OrderSuccess: React.FC<OrderSuccessProps> = ({ orderId, onContinue }) => {
  return (
    <div className="container" style={{ 
      textAlign: 'center', 
      padding: '100px 20px', 
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      animation: 'fadeIn 0.8s ease-out'
    }}>
      <div style={{ 
        width: '80px', 
        height: '80px', 
        background: 'var(--accent)', 
        borderRadius: '50%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        marginBottom: '30px',
        color: 'white',
        boxShadow: '0 10px 20px rgba(46, 125, 50, 0.2)'
      }}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '15px', color: 'var(--text)' }}>Order Confirmed!</h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '500px', margin: '0 auto 30px' }}>
        Thank you for choosing SOURYA MASALA. Your order <strong style={{color: 'var(--primary)'}}>#{orderId}</strong> is being processed and will be shipped soon.
      </p>
      <button 
        onClick={onContinue}
        className="cta-button"
        style={{ padding: '15px 40px' }}
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default OrderSuccess;

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ background: '#212121', color: 'white', padding: '60px 0', marginTop: '80px' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px' }}>
        <div>
          <h3 style={{ color: '#FFB300', marginBottom: '20px' }}>SOURYA MASALA</h3>
          <p style={{ maxWidth: '300px', color: '#BBB' }}>Bringing the essence of pure spices to your kitchen since 1995.</p>
        </div>
        <div>
          <h4 style={{ marginBottom: '20px' }}>Quick Links</h4>
          <ul style={{ color: '#BBB' }}>
            <li>About Us</li>
            <li>Shipping Policy</li>
            <li>Contact Us</li>
            <li>Bulk Orders</li>
          </ul>
        </div>
        <div>
          <h4 style={{ marginBottom: '20px' }}>Contact</h4>
          <p style={{ color: '#BBB' }}>123 Spice Market, Surat, Gujarat</p>
          <p style={{ color: '#BBB' }}>Email: info@souryamasala.com</p>
          <p style={{ color: '#BBB' }}>Phone: +91 98765 43210</p>
        </div>
      </div>
      <div className="container" style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #444', textAlign: 'center', color: '#666' }}>
        &copy; 2025 SOURYA MASALA. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

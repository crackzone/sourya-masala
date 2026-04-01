import React from 'react';

interface NavbarProps {
  toggleCart: () => void;
  cartCount: number;
  onSearchChange: (searchTerm: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleCart, cartCount, onSearchChange }) => {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="logo">SOURYA MASALA</div>
        
        <div className="nav-links">
          <a href="#" className="nav-link">Home</a>
          <a href="#shop" className="nav-link">Shop</a>
          <a href="#" className="nav-link">Whole Spices</a>
          <a href="#" className="nav-link">Blends</a>
          <a href="#" className="nav-link">About</a>
        </div>
        
        <div className="nav-actions">
          <div className="search-container" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <input 
              type="text" 
              placeholder="Search spices..." 
              onChange={(e) => onSearchChange(e.target.value)}
              style={{
                padding: '8px 15px',
                borderRadius: '50px',
                border: '1px solid var(--border)',
                outline: 'none',
                width: '180px',
                transition: 'var(--transition)'
              }}
            />
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="search-icon" style={{ position: 'absolute', right: '10px', pointerEvents: 'none', color: 'var(--text-muted)' }}>
              <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <div className="cart-icon" onClick={toggleCart} style={{ cursor: 'pointer' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span className="cart-count">{cartCount}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

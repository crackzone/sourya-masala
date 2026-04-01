import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CategoryGrid from './components/CategoryGrid';
import Recipes from './components/Recipes';
import CartDrawer from './components/CartDrawer';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import OrderHistory from './components/OrderHistory';
import OrderSuccess from './components/OrderSuccess';
import { Product, CartItem, Order } from './types';

const products: Product[] = [
  { id: 1, name: 'Turmeric Powder (Procured from Nizamabad)', price: 120, category: 'Ground Spices', image: '/turmeric.png' },
  { id: 2, name: 'Chilli Powder (Blended with Byadgi and Guntur)', price: 180, category: 'Ground Spices', image: '/chili.png' },
  { id: 3, name: 'Coriander powder (Procured from Rajasthan)', price: 110, category: 'Ground Spices', image: '/coriander.png' },
  { id: 4, name: 'Chicken Masala', price: 160, category: 'Spice Blends', image: '/chicken_masala.png' },
  { id: 5, name: 'Garam Masala', price: 150, category: 'Spice Blends', image: '/garam_masala.png' },
];

function App() {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('sourya_cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem('sourya_orders');
    return saved ? JSON.parse(saved) : [];
  });
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [lastOrderId, setLastOrderId] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem('sourya_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('sourya_orders', JSON.stringify(orders));
  }, [orders]);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const addToCart = (product: Product) => {
    const existingIndex = cartItems.findIndex(item => item.id === product.id);
    if (existingIndex > -1) {
      const newItems = [...cartItems];
      newItems[existingIndex].quantity += 1;
      setCartItems(newItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    setIsCartOpen(true);
  };

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const placeOrder = () => {
    const newOrderId = `ORD-${Math.floor(1000 + Math.random() * 9000)}`;
    const newOrder: Order = {
      id: newOrderId,
      items: cartItems,
      total: cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
      date: new Date().toLocaleDateString(),
      status: 'Pending'
    };
    setOrders([newOrder, ...orders]);
    setCartItems([]);
    setIsCartOpen(false);
    setLastOrderId(newOrderId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (lastOrderId) {
    return (
      <div className="app">
        <Navbar toggleCart={toggleCart} cartCount={0} onSearchChange={() => {}} />
        <OrderSuccess orderId={lastOrderId} onContinue={() => setLastOrderId(null)} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="app">
      <Navbar 
        toggleCart={toggleCart} 
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} 
        onSearchChange={setSearchTerm}
      />
      
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems} 
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        placeOrder={placeOrder}
      />

      <Hero />
      
      <CategoryGrid />

      <section id="shop" className="products container">
        <h2 className="section-title">
          {searchTerm ? `Search results for "${searchTerm}"` : 'Our Best Sellers'}
        </h2>
        
        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} {...product} onAddToCart={() => addToCart(product)} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '50px 0', background: 'white', borderRadius: '20px' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>No spices found matching your search.</p>
          </div>
        )}
      </section>

      {orders.length > 0 && <OrderHistory orders={orders} />}

      <Recipes />

      <Newsletter />

      <Footer />
    </div>
  );
}

export default App;

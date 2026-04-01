import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="newsletter">
      <div className="container">
        <h2>Join the Spice Family</h2>
        <p>Subscribe to get the latest spice arrivals, exclusive recipes, and 10% off your first order!</p>
        <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Enter your email address" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;

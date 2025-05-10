import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Welcome to Solemate</h1>
      <p>The go-to sneaker store for exclusives and heat drops.</p>

      <nav style={{ marginTop: '1rem' }}>
        <Link to="/login" style={{ margin: '0 10px' }}>Login</Link>
        <Link to="/register" style={{ margin: '0 10px' }}>Register</Link>
        <Link to="/products" style={{ margin: '0 10px' }}>View Products</Link>
        <Link to="/add" style={{ margin: '0 10px' }}>Add Product</Link>
      </nav>
    </div>
  );
}
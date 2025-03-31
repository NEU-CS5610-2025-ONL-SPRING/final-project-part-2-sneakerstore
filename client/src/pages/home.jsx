import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Solemate</h1>
      <p>The go-to sneaker store for exclusives and heat drops.</p>
      <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
    </div>
  );
}
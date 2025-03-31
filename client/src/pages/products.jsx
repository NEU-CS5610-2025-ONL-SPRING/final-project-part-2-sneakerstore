import { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/products')
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  return (
    <div>
      <h2>All Sneakers</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <strong>{p.brand}</strong>: {p.name} - ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
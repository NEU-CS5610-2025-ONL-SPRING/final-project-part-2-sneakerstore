import { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/products')
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Jordan 1 Retro Low OG SP Travis Scott Medium Olive</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map((p) => (
          <li key={p.id} style={{ marginBottom: '2rem' }}>
            <img 
              src={p.imageUrl} 
              alt={p.name} 
              style={{ width: '250px', borderRadius: '10px' }}
            />
            <p><strong>{p.brand}</strong>: {p.name} - ${p.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
import { useState } from 'react';

export default function AddProduct() {
  const [form, setForm] = useState({ name: '', brand: '', price: '', imageUrl: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const product = {
      ...form,
      price: parseFloat(form.price)
    };
  
    await fetch('http://localhost:3000/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(product)
    });
  
    alert('Product added!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Sneaker</h2>
      <input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Brand" onChange={(e) => setForm({ ...form, brand: e.target.value })} />
      <input type="number" placeholder="Price" onChange={(e) => setForm({ ...form, price: e.target.value })} />
      <input placeholder="Image URL" onChange={(e) => setForm({ ...form, imageUrl: e.target.value })} />
      <button type="submit">Add Product</button>
    </form>
  );
}
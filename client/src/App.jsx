import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Register from './pages/register';
import Login from './pages/login';
import Products from './pages/products';
import AddProduct from './pages/addproduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/add" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

app.use('/api', authRoutes);
app.use('/api/products', productRoutes);

app.get('/ping', (req, res) => res.send('pong'));

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
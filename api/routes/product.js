const express = require('express');
const { PrismaClient } = require('@prisma/client');
const requireAuth = require('../middleware/requireAuth');
const prisma = new PrismaClient();
const router = express.Router();

router.get('/', async(req, res) => {
    const products = await prisma.product.findMany();
    res.json(products);
});

router.post('/', requireAuth, async (req, res) => {
    const{name, brand, price, imageUrl} = req.body;
    const product = await prisma.product.create({
        data: {name, brand, price, imageUrl},
    });
    res.json(product);
})

module.exports = router;
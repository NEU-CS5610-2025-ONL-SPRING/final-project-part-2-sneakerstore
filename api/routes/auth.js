const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient;
const router = express.Router(); 

router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    const hashed = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({ data: { email, password: hashed } });
    res.send(user);
  });

router.post('/login', async (req, res) => {
    const{email, password} = req.body;
    const user = await prisma.user.findUnique({where:{email}});
    if (!user || !(await bcrypt.compare(password, user.password))){
        return res.status(401).send('Invalid Credentials');
    }
    const token = jwt.sign({id: user.id}, 'secret', {expiresIn: '1d'});
    res.cookie('token', token, {httpOnly: true}).send('Logged in');
});

router.post('/logout', (req,res) => {
    res.clearCookie('token').send('Logged Out');
});

module.exports = router;
const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return res.status(401).send('Not Authenticated');

    try{
        const user = jwt.verify(token, 'secret');
        req.user = user;
        next();
    }   catch (err){
        res.status(401).send('Invalid Token');
    }
}

module.exports = requireAuth;
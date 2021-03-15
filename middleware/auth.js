const jwt = require('jsonwebtoken');
const config = require('config');


module.exports = (req, res, next) => {
    // Get token from the header
    const token = req.header('x-auth-token');

    // Check if not token
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    // Verify token
    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));

        req.user = decoded.user;
        next();
    } catch (err) {
        console.log(err)
        res.status(401).json({ msg: 'Token is not valid' })
    }
}
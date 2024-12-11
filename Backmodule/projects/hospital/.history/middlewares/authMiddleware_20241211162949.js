// const jwt = require('jsonwebtoken');
// const { JWT_SECRET } = require('../constants')

// const authMiddleware = (req, res, next) => {
//     const token = req.headers.authorization?.split(' ')[1];

//     if (!token) {
//         return res.status(401).json({ error: 'Access Denied: No token provided' });
//     }

//     try {
//         const decoded = jwt.verify(token, 'your-secret-key'); // Замените 'your-secret-key' на ваш ключ
//         req.user = decoded; // Добавляем информацию о пользователе в запрос
//         next();
//     } catch (err) {
//         res.status(401).json({ error: 'Invalid Token' });
//     }
// };

// module.exports = authMiddleware;
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).redirect('/login');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (err) {
        console.error('JWT verification error:', err.message);
        res.status(401).redirect('/login');
    }
};


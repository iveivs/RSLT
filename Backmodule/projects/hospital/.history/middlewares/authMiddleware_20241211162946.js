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

const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../')

function auth(req, res, next) {
    const token = req.cookies('token')

    const verifyResult = jwt.verify(token)
}

module.exports = auth
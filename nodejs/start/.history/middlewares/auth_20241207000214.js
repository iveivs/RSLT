const jwt = require('jsonwebtoken')

function auth(req, res, next) {
    const token = req.cookies('token')

    const verifyResult = jwt.verify(token)
}

module.exports = auth
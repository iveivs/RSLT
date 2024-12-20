const User = require()
const { verify } = require("../helpers/token")

module.exports = function(req, res, next) {
    const tokenData = verify(req.cookies.token)
}
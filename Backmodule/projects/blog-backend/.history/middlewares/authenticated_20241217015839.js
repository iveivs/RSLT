const User = require('../models/User')
const { verify } = require("../helpers/token")

module.exports = function(req, res, next) {
    const tokenData = verify(req.cookies.token)

    const user = 
}
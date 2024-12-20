const User = require('../models/User')
const { verify } = require("../helpers/token")

module.exports = as function(req, res, next) {
    const tokenData = verify(req.cookies.token)

    const user = await
}
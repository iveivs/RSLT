const User = require('../models/User')
const { verify } = require("../helpers/token")

module.exports = async function(req, res, next) {
    const tokenData = verify(req.cookies.token)

    const user = await User.findOne({ _id: })
}
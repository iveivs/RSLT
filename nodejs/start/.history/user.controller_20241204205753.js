const User = require('./models/User')
const bcrypt = require('b')

async function addUser(email, password) {
    await User.create({email, password})
}

module.exports = { addUser}
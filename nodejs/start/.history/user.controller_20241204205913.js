const User = require('./models/User')
const bcrypt = require('bcrypt')

async function addUser(email, password) {
    const passwordHash = b
    await User.create({email, password})
}

module.exports = { addUser}
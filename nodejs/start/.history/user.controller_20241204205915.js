const User = require('./models/User')
const bcrypt = require('bcrypt')

async function addUser(email, password) {
    const passwordHash = bcrypt
    await User.create({email, password})
}

module.exports = { addUser}
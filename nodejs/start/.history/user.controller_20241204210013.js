const User = require('./models/User')
const bcrypt = require('bcrypt')

async function addUser(email, password) {
    const passwordHash = bcrypt.hash(password,)
    await User.create({email, password})
}

module.exports = { addUser}
const User = require('./models/User')
const bcrypt = require('bcrypt')

async function addUser(email, password) {
    const passwordHash = await bcrypt.hash(password, 10)
    await User.create({email, password: passwordHash})
}

async function loginUser(email, password) {

}

module.exports = { addUser}
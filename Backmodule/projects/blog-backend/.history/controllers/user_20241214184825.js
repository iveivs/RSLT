const bcrypt = require('bcrypt')
const User = require('../models/User')
// const 
// register
async function register(login, password) {
    if(!password) {
        throw new Error('Password is empty')
    }
    const passwordHash = await bcrypt.hash(password, 10)

    const user = await User.create({ login, password: passwordHash})

    return user
}
// login
async function login(login, password) {
    const user = User.findOne({ login })

    if(!user) {
        throw new Error('User not found')
    }

    const isPasswordMatch = await bcrypt.compare(password)
}
// logout
// delete
// edit(roles)

module.exports = {
    register,
    login
}

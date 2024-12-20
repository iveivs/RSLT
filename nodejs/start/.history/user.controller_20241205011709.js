const User = require('./models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'test'

async function addUser(email, password) {
    const passwordHash = await bcrypt.hash(password, 10)
    await User.create({email, password: passwordHash})
}

async function loginUser(email, password) {
    const user = await User.findOne({ email })

    if(!user) {
        throw new Error('User is not found')
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password)

    if(!isPasswordCorrect) {
        throw new Error('Wrong password')
    }

    return jwt.sign({ email }, JWT_SECRET, { expiresIn})
}

module.exports = { addUser, loginUser }
const bcrypt = require('bcrypt')
// register
async function register(login, password) {
    const passwordHash = bcrypt.hash(password)
}
// login
// logout
// delete
// edit(roles)

module.exports = {
    register
}

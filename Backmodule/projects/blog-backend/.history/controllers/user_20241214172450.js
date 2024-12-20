const bcrypt = require('bcrypt')
// register
async function register(login, password) {
    const passwordHash =  bcrypt.hash(password, 10)
}
// login
// logout
// delete
// edit(roles)

module.exports = {
    register
}

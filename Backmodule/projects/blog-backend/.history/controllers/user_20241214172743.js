const bcrypt = require('bcrypt')
// register
async function register(login, password) {
    if(!password) {
        throw new Error
    }
    const passwordHash = await bcrypt.hash(password, 10)
}
// login
// logout
// delete
// edit(roles)

module.exports = {
    register
}

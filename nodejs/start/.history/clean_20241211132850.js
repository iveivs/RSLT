const bcrypt = require('bcrypt')

const passwordHash = await bcrypt.hash(password, 10)
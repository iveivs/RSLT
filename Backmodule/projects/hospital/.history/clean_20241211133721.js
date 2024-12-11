const bcrypt = require('bcrypt')

const str = 'str'

const passwordHash = await bcrypt.hash(password, 10)

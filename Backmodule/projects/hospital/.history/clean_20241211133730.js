const bcrypt = require('bcrypt')

const str = 'str'

const passwordHash = await bcrypt.hash(str, 10)


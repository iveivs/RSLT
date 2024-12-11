
const bcrypt = require('bcrypt');

const str = 'str';

bcrypt.hash(str, 10)
    .then(passwordHash => {
        console.log(passwordHash);
    })
    .catch(err => {
        console.error(err);
    });

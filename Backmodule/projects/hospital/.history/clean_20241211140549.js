// const bcrypt = require('bcrypt');

// const str = 'str';

// bcrypt.hash(str, 10)
//     .then(passwordHash => {
//         console.log(passwordHash);
//     })
//     .catch(err => {
//         console.error(err);
//     });
const bcrypt = require('bcrypt');

(async () => {
    const password = 'asdasd'; // Замените на ваш пароль
    const hash = await bcrypt.hash(password, 10);
    console.log(hash); // Сохраните этот хэш в базе
})();
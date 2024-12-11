// // const mongoose = require('mongoose')
// // const validator = require('validator')

// // const UserSchema = mongoose.Schema({
// //     email: {
// //         type: String,
// //         required: true,
// //         unique: true,
// //         validate: {
// //             validator: validator.isEmail,
// //             message: 'Invalid email'
// //         }
// //     },
// //     password: {
// //         type: String,
// //         required: true
// //     },
// // })

// // const User = mongoose.model('User', UserSchema)

// // module.exports = User
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const validator = require('validator');

// const UserSchema = mongoose.Schema({
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         validate: {
//             validator: validator.isEmail,
//             message: 'Invalid email',
//         },
//     },
//     password: {
//         type: String,
//         required: true,
//     },
// });

// // Перед сохранением пользователя хэшируем пароль
// UserSchema.pre('save', async function (next) {
//     if (this.isModified('password')) {
//         this.password = await bcrypt.hash(this.password, 10);
//     }
//     next();
// });

// const User = mongoose.model('User', UserSchema);

// module.exports = User;
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
});


UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err) {
        next(err);
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;


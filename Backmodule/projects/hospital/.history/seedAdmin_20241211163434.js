require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');

const MONGO_URI = process.env.MONGO_URI;

mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        const admin = new User({
            email: 'asd@asd.com',
            password: 'asdasd',
        });

        await admin.save();
        console.log('Admin user created successfully');
        mongoose.disconnect();
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err.message);
        mongoose.disconnect();
    });
